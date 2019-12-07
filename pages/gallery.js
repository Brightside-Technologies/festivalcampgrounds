import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";

export default function GalleryPage({ data, metadata }) {
  const { title, description } = metadata;
  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="section">
        <div className="container px-0">
          <PageTitle className="pt-3 pb-1">{title}</PageTitle>
          <p>{description}</p>
          <div className="row">
            <div className="card-columns">
              {data.map((a, index) => {
                return (
                  <div
                    key={index}
                    className="card bg-dark text-white rounded-0 border-0"
                  >
                    <img
                      src={a}
                      className="card-img rounded-0 border-0"
                      alt="image gallery"
                    />
                    <div className="card-img-overlay"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

GalleryPage.getInitialProps = async () => {
  const dataAsync = import("../_data/gallery.json");
  const data = await dataAsync;
  const metadata = {
    title: "Gallery",
    description: ""
  };
  return {
    data: data.default,
    metadata
  };
};
