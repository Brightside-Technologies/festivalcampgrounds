import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../../containers/Layout";
import Mask from "../../../components/Mask";
import Heading from "../../../components/Heading";
import ImageReel from "../../../components/ImageReel";
import Button from "../../../components/Button";
import { BOOK_NOW_URL } from "../../../constants";
import { ArrowLeft } from "lucide-react";
import IconRenderer from "../../../components/IconRenderer";

export default function OptionDetailsPage({ camp, campingOption }) {
  return (
    <Layout title={`${camp.name} | ${campingOption.name}`} description="">
      {/* Hero */}
      <section
        className="relative flex h-[75vh] w-full flex-col justify-between bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${campingOption.images?.[0]})` }}
      >
        {/* readability overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        {/* Back button */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl px-4 pt-4">
          <Button href={`/camping/${camp.slug}`} className="text-white">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-bold uppercase">{camp.name}</span>
            </span>
          </Button>
        </div>

        {/* Title */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-start justify-center px-4">
          <h1 className="absolute top-16 pt-5 text-center text-5xl font-bold text-white md:text-6xl">
            {campingOption.name}
          </h1>
        </div>
      </section>

      {/* Details card */}
      <section className="relative z-20 -mt-28 pb-12 px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative bg-white shadow-lg">
            <div className="p-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                {/* Markdown description */}
                <div className="md:col-span-8">
                  <div className="prose max-w-none">
                    <ReactMarkdown>{campingOption.description}</ReactMarkdown>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-4">
                  <div className="pb-8">
                    <Heading className="m-0 pb-3 uppercase">
                      Book for pricing details
                    </Heading>
                    <Button href={BOOK_NOW_URL} target="_blank" role="button">
                      Book Now
                    </Button>
                  </div>

                  <div className="pb-3">
                    <Heading className="uppercase">Amenities</Heading>

                    <div className="mt-3 space-y-3">
                      {campingOption.amenities?.map((a, index) => (
                        <div key={index} className="flex items-center">
                          {a.icon && (
                            <span className="mr-2 flex items-center text-[#f4778d]">
                              <IconRenderer name={a.icon} size={36} />
                            </span>
                          )}
                          <p className="m-0">{a.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* /Sidebar */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images reel */}
      <section className="px-0 py-12">
        <div className="w-full px-0">
          <ImageReel
            containerClass="h-100 pb-10"
            itemClass="mx-1"
            centerMode
            images={campingOption.images}
          />
        </div>
      </section>
    </Layout>
  );
}

/**
 * Build all static routes for /accommodation/[camp]/[slug]
 */
export async function getStaticPaths() {
  const campsData = (await import("../../../_data/camps.json")).default.filter(
    (c) => c.slug !== "rancho-alvarado"
  );

  const paths = [];

  for (const camp of campsData) {
    for (const optionEntry of camp.options) {
      const optionSlug = Object.keys(optionEntry)[0];

      paths.push({
        params: {
          camp: camp.slug,
          slug: optionSlug
        }
      });
    }
  }

  return {
    paths,
    fallback: false
  };
}

/**
 * Build the page props for each route
 */
export async function getStaticProps({ params }) {
  const campSlug = params?.camp;
  const optionSlug = params?.slug;

  const [campsData, campingOptionsData] = await Promise.all([
    import("../../../_data/camps.json").then((m) => m.default),
    import("../../../_data/camping-options.json").then((m) => m.default)
  ]);

  const camp = campsData.find((c) => c.slug === campSlug);

  const baseOption = campingOptionsData.find((o) => o.slug === optionSlug);

  // Merge camp-specific override props (same behavior as your client-side version)
  const overrideEntry = camp?.options?.find(
    (item) => Object.keys(item)[0] === optionSlug
  );
  const overrideProps = overrideEntry ? overrideEntry[optionSlug] : {};

  const campingOption = { ...baseOption, ...overrideProps };

  // If anything is missing, you can return notFound for safety
  if (!camp || !baseOption) {
    return { notFound: true };
  }

  return {
    props: {
      camp,
      campingOption
    }
  };
}
