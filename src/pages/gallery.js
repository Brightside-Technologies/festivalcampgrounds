import PageTitle from "@/components/PageTitle";
import Layout from "@/containers/Layout";
import FCImage from "@/components/FCImage";

export default function GalleryPage({ data, metadata }) {
  const { title, description } = metadata;

  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="pt-3 pb-1">{title}</PageTitle>
          {description ? <p className="mt-2">{description}</p> : null}

          {/* Masonry-style columns (Bootstrap card-columns equivalent) */}
          <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {data.map((src, index) => (
              <div
                key={index}
                className="relative mb-4 break-inside-avoid overflow-hidden bg-zinc-900 text-white shadow"
              >
                <FCImage
                  src={src}
                  alt="image gallery"
                  variant="gallery"
                  className="w-full"
                  imgClassName="w-full"
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 48px) / 2), 384px"
                  blur
                />

                {/* overlay (matches old “card-img-overlay” feel) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const images = (await import("../_data/gallery.json")).default;

  const metadata = {
    title: "Gallery",
    description: ""
  };

  return {
    props: {
      data: images,
      metadata
    }
  };
}
