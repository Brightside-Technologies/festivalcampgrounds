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

const campOptions = [
  {
    name: "BYO Tent",
    price: 120,
    description: "12 x 12 space",
    image:
      "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/BYO03.jpg?fit=1024%2C681&ssl=1"
  },
  {
    name: "Signature Tent",
    price: 199,
    description: "Unfurnished",
    image:
      "https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/20-1.jpg?fit=1024%2C683&ssl=1"
  },
  {
    name: "Deluxe Tent",
    price: 299,
    description: "One Bed",
    image:
      "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/21.jpg?fit=1024%2C683&ssl=1"
  },
  {
    name: "Superior Tent",
    price: 399,
    description: "Two Beds",
    image:
      "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/19.jpg?fit=1024%2C683&ssl=1"
  }
];

const testimonials = [
  {
    name: "Lauren",
    description:
      "If we could give 10 out of 5 stars we would. Since day one we felt comfortable, safe and had a great time at the Ranch. Everyone was super friendly and helpful and genuinely cared about our wellbeing every night and morning. The beauty bar, ice buckets and 24 hour security were amazing and an added feature we were not even aware was going to happen! We loved every minute and will 150% be back!",
    image:
      "https://i0.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/home_pic_01.jpg?fit=1140%2C930&ssl=1",
    featured: true
  },
  {
    name: "Julie",
    description:
      "This place was perfect for our weekend camping trip! The grass and shade from the palm trees was great during a hot, dry weekend. The bathrooms were very nice (always clean and stocked with TP and towels) and the access to the ice machine was such a bonus! I also really appreciated having security there at night, the guard was really personable and made me feel totally safe. I’ll definitely be staying here again next year!",
    image: "",
    featured: false
  },
  {
    name: "Silvia",
    description:
      "The place is super amazing, away from all the dirt and dust of coachella. It’s basically glamping and you will love it.",
    image: "",
    featured: false
  },
  {
    name: "Grace",
    description:
      "Johnny and Claudia are incredible hosts! They go above and beyond to accommodate and make the trip as special and memorable as possible. Stay with them and you’ll see! The camping space is truly a desert oasis, imported with a water fountain and perfect ecosystem of beautiful birds and wildlife. Stay here, you will be refreshed in all aspects!!!",
    image: "",
    featured: false
  },
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    image: "",
    featured: false
  }
];

const featuredTestimonial = testimonials.filter(t => t.featured)[0];

const images = [
  "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/19.jpg?fit=1024%2C683&ssl=1",
  "https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/20-1.jpg?fit=1024%2C683&ssl=1",
  "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/02/site-1.jpg?fit=700%2C525&ssl=1",
  "https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/02/site-2.jpg?fit=700%2C525&ssl=1",
  "https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/02/site-4.jpg?fit=700%2C525&ssl=1",
  "https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/35.jpg?ssl=1",
  "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/04.jpg?ssl=1",
  "https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/02/site-3.jpg?fit=700%2C525&ssl=1",
  "https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/BYO03.jpg?fit=1024%2C681&ssl=1"
];

export default function HomePage() {
  const title = "Festival Campgrounds";
  const description =
    "Festival Campgrounds – A Desert Retreat – Coachella Festival – Stage Coach – Camping";
  return (
    <Layout title={title} description={description}>
      <Hero>
        <Carousel
          id="hero-carousel"
          className="carousel slide"
          data-interval={false} //TOD: remove
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#hero-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#hero-carousel" data-slide-to="1"></li>
            <li data-target="#hero-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block img-fluid"
                src="https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/04.jpg?ssl=1"
                alt="..."
              />
              <div className="pt-0 pt-sm-5 carousel-caption d-flex flex-column align-items-center">
                <h5 className="display-4">A Desert Retreat</h5>
                <p className="h2">Less than 2 miles from festival grounds</p>
              </div>
              <Mask />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src="https://i2.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/35.jpg?ssl=1"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column align-items-center">
                <h5 className="display-4">More than a place to stay</h5>
                <p className="h2">A wonderful experience to remember forever</p>
              </div>
              <Mask />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src="https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/19.jpg?ssl=1"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column align-items-center">
                <h5 className="display-4">Camping in style</h5>
                <p className="h2">
                  With multiple options to choose, for any needs
                </p>
              </div>
              <Mask />
            </div>
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
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
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
            <div className="col-sm-8">
              <img
                src="https://i1.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/map.jpg?fit=1140%2C930&ssl=1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="h2 text-uppercase">Camping Options</h2>
          <div className="row">
            {campOptions.map((option, index) => {
              return (
                <div key={index} className="col-sm-3 px-1 my-1">
                  <div className="border-0 rounded-0 card text-white bg-dark">
                    <img
                      src={option.image}
                      className="card-img-top rounded-0"
                      alt={option.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center m-0">
                        {option.name}
                      </h5>
                      <p className="card-title text-center h1">{`$${option.price}`}</p>
                      <p className="card-text text-center">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
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
        <div className="container">
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
                    alt="..."
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
