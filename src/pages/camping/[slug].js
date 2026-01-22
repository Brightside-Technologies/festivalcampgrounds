import React from "react";
import Layout from "../../containers/Layout";
import Button from "../../components/Button";
import { BOOK_NOW_URL } from "../../constants";

export default function CampDetailsPage({ camp, campingOptions }) {
  return (
    <Layout title="" description="">
      {/* Hero */}
      <section
        className="relative flex h-[300px] w-full flex-col justify-between bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${camp.image})` }}
      >
        {/* readability overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-start justify-center px-4">
          <div className="absolute top-20 z-10 text-center">
            <h1 className="mb-0 pt-8 text-5xl font-light text-white md:text-6xl">
              {camp.name}
            </h1>
            {camp.subtitle && (
              <h2 className="m-0 p-0 text-2xl font-light text-zinc-200 md:text-3xl">
                {camp.subtitle}
              </h2>
            )}
          </div>
        </div>

        {/* If you want the colored gradient overlay too, uncomment: */}
        {/* <Mask /> */}
      </section>

      {/* Description */}
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <p>{camp.description}</p>
        </div>
      </section>

      {/* Options list */}
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="space-y-4">
            {campingOptions.map((option, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white border shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left details */}
                  <div className="lg:col-span-4">
                    <div className="flex h-full flex-col justify-between p-4">
                      <div>
                        <h4 className="text-xl font-semibold">{option.name}</h4>
                        <p className="mt-1 text-xs uppercase text-zinc-500">
                          <small>Book now for pricing details</small>
                        </p>

                        <div className="mt-4 space-y-1">
                          <p>Bed(s): {option.bed_count}</p>
                          <p>Style: {option.style}</p>
                          <p>Capacity: {`${option.capacity} people`}</p>
                          <p>Size: {option.size}</p>
                          <p>Additional Guests: {option.guests}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <Button
                          href={`/accommodation/${camp.slug}/${option.slug}`}
                          className="text-white"
                        >
                          View Details
                        </Button>

                        <Button
                          target="_blank"
                          href={BOOK_NOW_URL}
                          className="text-white"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="lg:col-span-8">
                    <img
                      src={option.images[0]}
                      alt={option.name}
                      className="h-[260px] w-full object-cover lg:h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * Build all static routes for /camping/[slug]
 */
export async function getStaticPaths() {
  const camps = (await import("../../_data/camps.json")).default;

  return {
    paths: camps.map((camp) => ({
      params: { slug: camp.slug }
    })),
    fallback: false
  };
}

/**
 * Build props for each camp page
 */
export async function getStaticProps({ params }) {
  const campSlug = params?.slug;

  const [camps, allOptions] = await Promise.all([
    import("../../_data/camps.json").then((m) => m.default),
    import("../../_data/camping-options.json").then((m) => m.default)
  ]);

  const camp = camps
    .filter((c) => c.slug !== "rancho-alvarado")
    .find((c) => c.slug === campSlug);

  if (!camp) return { notFound: true };

  const campingOptions = camp.options.map((item) => {
    const optionSlug = Object.keys(item)[0];
    const base = allOptions.find((o) => o.slug === optionSlug);
    const override = item[optionSlug] || {};
    return { ...base, ...override };
  });

  return {
    props: {
      camp,
      campingOptions
    }
  };
}
