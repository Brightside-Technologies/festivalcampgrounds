import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";
import clsx from "clsx";

function getYouTubeId(input) {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || null;
    }

    const v = url.searchParams.get("v");
    if (v) return v;

    const parts = url.pathname.split("/").filter(Boolean);
    const embedIndex = parts.indexOf("embed");
    if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];

    const shortsIndex = parts.indexOf("shorts");
    if (shortsIndex >= 0 && parts[shortsIndex + 1])
      return parts[shortsIndex + 1];

    return null;
  } catch {
    return null;
  }
}

function YouTubeEmbed({ video, title }) {
  const id = getYouTubeId(video);
  if (!id) return null;

  return (
    <div className="relative h-full w-full">
      <iframe
        title={title || "Amenity video"}
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function AmenityCard({ amenity }) {
  const hasVideo = Boolean(amenity.video);

  return (
    <article className="overflow-hidden rounded-md bg-black shadow-sm ring-2 ring-black">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <h4 className="text-sm font-extrabold uppercase tracking-wide text-white">
          {amenity.text}
        </h4>
      </header>

      {/* Body */}
      <div className="relative h-[220px] bg-zinc-900">
        {hasVideo ? (
          <YouTubeEmbed video={amenity.video} title={amenity.text} />
        ) : (
          <img
            src={amenity.images?.[0]}
            alt={amenity.text}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}

        {/* Optional readability overlay for images only (videos usually already readable) */}
        {!hasVideo && (
          <div className="pointer-events-none absolute inset-0">
            <Mask />
          </div>
        )}
      </div>
    </article>
  );
}

export default function AmenitiesPage({ data, metadata }) {
  const { title, description } = metadata;

  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="pt-3 pb-1 text-5xl md:text-6xl">
            {title}
          </PageTitle>

          {description ? <p className="mt-2">{description}</p> : null}

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.map((a, index) => (
              <AmenityCard key={index} amenity={a} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = (await import("../_data/amenities.json")).default;

  const metadata = {
    title: "Amenities",
    description:
      "The Coachella Rancho 51 Glamping Experience, less than 2 miles away from the festival grounds.  Our “Pop-Up” Tent Camping Ranch Resort has plenty of palm trees, providing unlimited shade, along with lush green grass, a relaxing pool and beautiful mountain views. festival campgrounds allows you to get the most out of your camping experience with 24 hour security, restroom trailers with flushable toilets, hot and cold showers, blow dry and beauty bar, yoga, charging stations, local food trucks and much more. Festival access is convenient as we provide shuttle service. The experience of Camping, combined with the comforts of resort living, Festival Campgrounds take camping to a whole new level."
  };

  return {
    props: {
      data,
      metadata
    }
  };
}
