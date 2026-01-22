import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";

export default function AmenitiesPage({ data, metadata }) {
  const { title, description } = metadata;

  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="text-5xl md:text-6xl pt-3 pb-1">
            {title}
          </PageTitle>
          <p className="mt-2">{description}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.map((a, index) => (
              <div key={index} className="w-full">
                <div className="relative h-[200px] overflow-hidden bg-zinc-900 text-white shadow-sm">
                  <img
                    src={a.images[0]}
                    alt={a.text}
                    className="h-full w-full object-cover"
                  />

                  {/* Gradient mask overlay */}
                  <Mask />

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex items-end p-4">
                    <h4 className="text-xl font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                      {a.text}
                    </h4>
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

export async function getStaticProps() {
  const dataAsync = import("../_data/amenities.json");
  const data = await dataAsync;

  const metadata = {
    title: "Amenities",
    description:
      "The Coachella Rancho 51 Glamping Experience, less than 2 miles away from the festival grounds.  Our “Pop-Up” Tent Camping Ranch Resort has plenty of palm trees, providing unlimited shade, along with lush green grass, a relaxing pool and beautiful mountain views. festival campgrounds allows you to get the most out of your camping experience with 24 hour security, restroom trailers with flushable toilets, hot and cold showers, blow dry and beauty bar, yoga, charging stations, local food trucks and much more. Festival access is convenient as we provide shuttle service. The experience of Camping, combined with the comforts of resort living, Festival Campgrounds take camping to a whole new level."
  };

  return {
    props: {
      data: data.default,
      metadata
    }
  };
}
