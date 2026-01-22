import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { encode } from "blurhash";

const PROJECT_ROOT = process.cwd();
const IMAGES_DIR = path.join(PROJECT_ROOT, "public", "images");
const OUT_DIR = path.join(PROJECT_ROOT, "src", "_data/generated");
const OUT_FILE = path.join(OUT_DIR, "image-manifest.json");

// Tune these
const PLACEHOLDER_WIDTH = 24; // small = good enough blur, tiny payload
const PLACEHOLDER_QUALITY = 40; // webp quality
const BLURHASH_COMPONENTS_X = 4; // 4x3 is a good balance
const BLURHASH_COMPONENTS_Y = 3;

const SUPPORTED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

// Simple concurrency limiter (avoid blowing memory with sharp)
function createLimiter(limit) {
  let active = 0;
  const queue = [];
  const next = () => {
    if (active >= limit) return;
    const job = queue.shift();
    if (!job) return;
    active++;
    job()
      .catch(() => {})
      .finally(() => {
        active--;
        next();
      });
  };
  return (fn) =>
    new Promise((resolve, reject) => {
      queue.push(() => fn().then(resolve, reject));
      next();
    });
}

const limit = createLimiter(6);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function toPublicSrc(filePath) {
  // filePath: /.../public/images/foo/bar.jpg
  // src: "/images/foo/bar.jpg"
  const rel = path.relative(path.join(PROJECT_ROOT, "public"), filePath);
  return "/" + rel.split(path.sep).join("/");
}

function base64DataUrl(mime, buffer) {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

async function getBlurhashFromImage(filePath) {
  // Encode from a small RGBA buffer for speed
  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .resize(64) // keep aspect; small is fine for blurhash
    .raw()
    .toBuffer({ resolveWithObject: true });

  return encode(
    new Uint8ClampedArray(data),
    info.width,
    info.height,
    BLURHASH_COMPONENTS_X,
    BLURHASH_COMPONENTS_Y
  );
}

async function makePlaceholderWebp(filePath) {
  const img = sharp(filePath);
  const meta = await img.metadata();

  // Create a tiny webp placeholder (keeps aspect)
  const buf = await sharp(filePath)
    .resize(PLACEHOLDER_WIDTH)
    .webp({ quality: PLACEHOLDER_QUALITY })
    .toBuffer();

  return {
    width: meta.width ?? null,
    height: meta.height ?? null,
    blurDataURL: base64DataUrl("image/webp", buf)
  };
}

async function processOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXT.has(ext)) return null;

  const src = toPublicSrc(filePath);

  const [{ width, height, blurDataURL }, blurhash] = await Promise.all([
    makePlaceholderWebp(filePath),
    getBlurhashFromImage(filePath).catch(() => null) // optional, don’t fail whole build
  ]);

  return {
    src, // "/images/..."
    width,
    height,
    blurDataURL, // for next/image placeholder="blur"
    blurhash // optional (string or null)
  };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const all = await walk(IMAGES_DIR);
  const imageFiles = all.filter((f) =>
    SUPPORTED_EXT.has(path.extname(f).toLowerCase())
  );

  const results = await Promise.all(
    imageFiles.map((file) => limit(() => processOne(file)))
  );

  const manifestArray = results.filter(Boolean);

  // Create lookup map keyed by src for easy access
  const manifest = {};
  for (const item of manifestArray) {
    manifest[item.src] = item;
  }

  await fs.writeFile(OUT_FILE, JSON.stringify(manifest, null, 2), "utf8");

  console.log(
    `✅ Image manifest generated: ${path.relative(PROJECT_ROOT, OUT_FILE)}`
  );
  console.log(`   Images processed: ${manifestArray.length}`);
}

main().catch((err) => {
  console.error("❌ Failed to generate image manifest");
  console.error(err);
  process.exit(1);
});
