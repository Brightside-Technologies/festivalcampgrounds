import styled from "styled-components";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";
import ImageReel from "../components/ImageReel";
import Markdown from "react-markdown";

const Hero = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 3.25rem);
  background: ${props => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const HeroBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Icon = styled.i`
  height: 36px;
  width: 36px;
  margin-right: 0.5rem;
`;

const Alert = styled.div`
  padding: 10px;
  border-left: 6px solid;
  border-left-color: #f4778d;
  border-radius: 5px;
  background-color: #fae7e8;
  border-color: #e45460;
`;

export default function AboutUsPage({ metadata, data }) {
  const { title: page_title, description } = metadata;
  const {
    images,
    title,
    subtitle,
    hero_image,
    amenities,
    amenities_images,
    content
  } = data;

  return (
    <Layout title={page_title} description={description}>
      <Hero bgImage={hero_image}>
        <HeroBody className="container">
          <div
            className="position-absolute d-flex flex-column align-items-center justify-content-center"
            style={{ zIndex: 10 }}
          >
            <h1
              className="text-center my-5 text-white"
              style={{ fontWeight: 300 }}
            >
              About Us
            </h1>
            <h2 className="text-center text-white" style={{ fontWeight: 300 }}>
              {title}
            </h2>
            <h3 className="text-center text-white h5">{subtitle}</h3>
          </div>
        </HeroBody>
        <Mask />
      </Hero>
      <section className="section">
        <div className="container px-0">
          <img
            src="/images/j&c.jpg"
            style={{ float: "left", maxWidth: "200px", margin: "1rem" }}
          />
          <Markdown source={content} />
        </div>
      </section>
      <section className="section px-0">
        <div className="container-fluid px-0">
          <ImageReel
            containerClass="h-100"
            itemClass="mx-1"
            centerMode={true}
            images={images}
          />
        </div>
      </section>
      <section className="section">
        <div className="container px-0">
          <div className="row">
            <div className="col-md-6">
              <h2>Everything you need for the maximum experience</h2>
              {amenities.map((a, index) => {
                return (
                  <div key={index} className="d-flex align-items-center">
                    {a.icon && <Icon className={a.icon}></Icon>}
                    <p className="m-0">{a.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="col-md-6">
              <ImageReel containerClass="h-100" images={amenities_images} />
            </div>
            <div className="col-sm-12 mt-3">
              <Alert>
                To book your hair & makeup email us to &nbsp;
                <a
                  className="text-dark font-weight-bold"
                  href="mailto:info@festivalcampgrounds.com"
                >
                  info@festivalcampgrounds.com
                </a>
              </Alert>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

AboutUsPage.getInitialProps = async () => {
  const dataAsync = import("../_data/pages/about-us.json");

  const promises = [dataAsync].map(p => p.then(res => res.default));

  const [page_data] = await Promise.all(promises);

  const { metadata, ...data } = page_data;

  return {
    data,
    metadata
  };
};
