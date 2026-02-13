import path from "path";
import { promises as fs } from "fs";
import Layout from "../containers/Layout";
import PageTitle from "../components/PageTitle";
import FCImage from "../components/FCImage";

const SUPPORTED_IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg"
]);

function toSponsorLabel(filename) {
  const withoutExtension = filename.replace(/\.[^/.]+$/, "");
  return withoutExtension
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function SponsorsPage({ data, metadata }) {
  const { title, description } = metadata;

  return (
    <Layout title={title} description={description}>
      <section className="px-6 py-12 h-full">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="pt-3 pb-1">{title}</PageTitle>
          {description ? <p className="mt-2">{description}</p> : null}

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {data.map((sponsor) => (
              <article
                key={sponsor.src}
                className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <FCImage
                  src={sponsor.src}
                  alt={sponsor.name}
                  fill
                  blur={false}
                  objectFit="contain"
                  objectPosition="center"
                  className="h-20 w-full"
                  imgClassName="h-full w-full"
                  sizes="(max-width: 639px) calc((100vw - 64px) / 2), (max-width: 1023px) calc((100vw - 104px) / 3), 220px"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const sponsorsDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "sponsors"
  );

  const files = await fs.readdir(sponsorsDirectory);

  const data = files
    .filter((filename) =>
      SUPPORTED_IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase())
    )
    .sort((a, b) => a.localeCompare(b))
    .map((filename) => ({
      src: `/images/sponsors/${filename}`,
      name: toSponsorLabel(filename)
    }));

  const metadata = {
    title: "Sponsors",
    description: "We are grateful to our sponsor partners."
  };

  return {
    props: {
      data,
      metadata
    }
  };
}
