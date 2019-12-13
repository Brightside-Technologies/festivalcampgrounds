import React from "react";
import styled from "styled-components";
import Layout from "../containers/Layout";
import Testimonials from "../components/Testimonials";
import Mask from "../components/Mask";

const Icon = styled.i`
  height: 36px;
  width: 36px;
  margin: 0.5rem;
`;

const Hero = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${"" /* max-height: calc(100vh - 3.25rem); */}
`;

const Carousel = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  ${"" /* max-height: 100%; */}
  max-height: calc(100vh - 3.25rem);

  .carousel-inner {
    ${"" /* max-height: 100%; */}
    max-height: calc(100vh - 3.25rem);
  }
  .carousel-item {
    ${"" /* max-height: calc(100vh - 3.25rem); */}
  }
  .carousel-caption {
    top: 0;
    bottom: 0;
    ${"" /* padding-top: 5rem;
    padding-bottom: 5rem; */}
  }
`;

export default function HomePage({ data, metadata }) {
  const { title, description } = metadata;
  const { camping_options, testimonials, images, hero_carousel } = data;

  const featuredTestimonial = testimonials.filter(t => t.featured)[0];

  React.useEffect(() => {
    async function init() {
      await import("bootstrap/js/dist/util");
      await import("bootstrap/js/dist/carousel");
    }
    init();
  }, []);

  return (
    <Layout title={title} description={description}>
      <Hero>
        <Carousel
          id="hero-carousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval={false}
        >
          <ol className="carousel-indicators">
            {hero_carousel.map((item, index) => {
              return (
                <li
                  key={index}
                  data-target="#hero-carousel"
                  data-slide-to={index}
                  className={`${index === 0 ? "active" : ""}`}
                ></li>
              );
            })}
          </ol>
          <div className="carousel-inner">
            {hero_carousel.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="d-block img-fluid w-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="pt-0 pt-sm-5 carousel-caption d-flex flex-column align-items-center">
                    <h5 className="h1" style={{ fontWeight: 300 }}>
                      {item.title}
                    </h5>
                    <p className="h2" style={{ fontWeight: 300 }}>
                      {item.subtitle}
                    </p>
                  </div>
                  <Mask />
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>{" "}
          </a>
        </Carousel>
      </Hero>
      <section className="section">
        <div className="container px-0">
          <div className="row">
            <div className="col-md-4">
              <p className="text-uppercase">The distance</p>
              <h2 className="text-uppercase display-4">
                Closer than You think
              </h2>
              <p>
                There are multiple options and experiences to get to festival
                grounds. Your choice!
              </p>
              <div className="d-flex align-items-center">
                <Icon className="fas fa-car-side"></Icon>
                <p className="m-0 h5">5 minutes by car</p>
              </div>
              <div className="d-flex align-items-center">
                <Icon className="fas fa-bicycle"></Icon>
                <p className="m-0 h5">15 minutes by bike</p>
              </div>
              <div className="d-flex align-items-center">
                <Icon className="fas fa-walking"></Icon>
                <p className="m-0 h5">45 minutes walking</p>
              </div>
            </div>
            <div className="col-md-8">
              <img src="/images/map.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container px-0">
          <h2 className="h2 text-uppercase">Camping Options</h2>
          <div className="row justify-content-center">
            {camping_options.map((option, index) => {
              return (
                <div key={index} className="col-md-4 px-1 my-2">
                  <div className="border-0 rounded-0 card text-white bg-dark h-100 shadow">
                    <img
                      src={option.images[0]}
                      className="card-img-top rounded-0"
                      alt={option.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center m-0">
                        {option.name}
                      </h5>
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="h2">{`$${option.starting_price_per_night}`}</span>
                        &nbsp;
                        <span>per night</span>
                      </div>
                      <p className="card-text text-center">{option.style}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container px-0">
          <h2 className="h2 text-uppercase mb-5">
            Here's What Our Customers Are Saying
          </h2>
          <div className="row">
            <div className="col-sm-5">
              <p className="text-uppercase">The Campgrounds</p>
              <h2 className="text-uppercase display-4">
                Loved Every Minute of It
              </h2>
              <p>{featuredTestimonial.description}</p>
              <p className="lead">&ndash; &nbsp;{featuredTestimonial.name}</p>
            </div>
            <div className="col-sm-7">
              <img src={featuredTestimonial.image} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 p-0">
              <Testimonials
                testimonials={testimonials.filter(t => !t.featured)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container px-0">
          <div className="card-columns">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="card bg-dark text-white rounded-0 border-0"
                >
                  <img
                    src={image}
                    className="card-img rounded-0 border-0"
                    alt="image gallery"
                  />
                  <div className="card-img-overlay"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

HomePage.getInitialProps = async () => {
  const campingOptionsAsync = import("../_data/camping-options.json");
  const testimonialsAsync = import("../_data/testimonials.json");

  const promises = [campingOptionsAsync, testimonialsAsync].map(p =>
    p.then(res => res.default)
  );

  const [camping_options, testimonials] = await Promise.all(promises);

  // TODO: define these in json file
  const images = [
    "/images/fds-313.jpg",
    "/images/f-136.jpg",
    "/images/f-140.jpg",
    "/images/f-150.jpg",
    "/images/f-84.jpg",
    "/images/f-66.jpg",
    "/images/f-54.jpg",
    "/images/f-38.jpg",
    "/images/f-62.jpg",
    "/images/f-16.jpg",
    "/images/f-128.jpg"
  ];

  // TODO: define in json file
  const hero_carousel = [
    {
      title: "A Desert Retreat",
      subtitle: "Less than 2 miles from festival grounds",
      image: "/images/f-54.jpg"
    },
    {
      title: "More than a place to stay",
      subtitle: "A wonderful experience to remember forever",
      image: "/images/image-08.jpg"
    },
    {
      title: "Camping in style",
      subtitle: "With multiple options to choose, for any needs",
      image: "/images/f-150.jpg"
    }
  ];

  const metadata = {
    title: "Festival Campgrounds",
    description:
      "Festival Campgrounds – A Desert Retreat – Coachella Festival – Stage Coach – Camping"
  };

  return {
    data: {
      camping_options,
      testimonials,
      images,
      hero_carousel
    },
    metadata
  };
};
