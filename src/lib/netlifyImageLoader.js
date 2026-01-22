export default function netlifyImageLoader({ src, width, quality }) {
  const q = quality || 75;

  // src is like "/images/file-name.jpg"
  const clean = src.startsWith("/") ? src.slice(1) : src; // "images/file-name.jpg"

  // vanity route (handled by netlify.toml redirect)
  return `/img/${clean}?w=${width}&q=${q}`;
}
