import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";

export default function AmenitiesPage({ data, metadata }) {
  const { title, description } = metadata;
  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="section">
        <div className="container px-0">
          <PageTitle className="pt-3 pb-1">{title}</PageTitle>
          <p>{description}</p>
          <div className="row">
            {data.map((a, index) => {
              return (
                <div key={index} className="col-md-4 my-1">
                  <div
                    className="card bg-dark text-white border-0 rounded-0 shadow-sm"
                    style={{ height: 200, overflow: "hidden" }}
                  >
                    <img
                      src={a.images[0]}
                      className="card-img"
                      alt={a.text}
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                    <Mask />
                    <div className="card-img-overlay">
                      <h4 className="card-title">{a.text}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

AmenitiesPage.getInitialProps = async () => {
  const dataAsync = import("../_data/amenities.json");
  const data = await dataAsync;
  const metadata = {
    title: "Amenities",
    description:
      "The Coachella Rancho 51 Glamping Experience, less than 2 miles away from the festival grounds.  Our “Pop-Up” Tent Camping Ranch Resort has plenty of palm trees, providing unlimited shade, along with lush green grass, a relaxing pool and beautiful mountain views. festival campgrounds allows you to get the most out of your camping experience with 24 hour security, restroom trailers with flushable toilets, hot and cold showers, blow dry and beauty bar, yoga, charging stations, local food trucks and much more. Festival access is convenient as we provide shuttle service. The experience of Camping, combined with the comforts of resort living, Festival Campgrounds take camping to a whole new level."
  };
  return {
    data: data.default,
    metadata
  };
};
