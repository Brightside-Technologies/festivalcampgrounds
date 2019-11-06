import styled from "styled-components";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";
import ImageReel from "../components/ImageReel";

const Hero = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 3.25rem);
  background: url(https://i0.wp.com/www.festivalcampgrounds.com/wp-content/uploads/2019/01/31.jpg?fit=1440%2C600&ssl=1);
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

const SectionWithImage = styled.section`
  background: url(http://www.festivalcampgrounds.com/wp-content/uploads/2019/01/Coachella_2014_sunset.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 500px;
`;

const Title = styled.h1`
  z-index: 1;
  padding-top: 2rem;
`;

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

export default function AboutUsPage() {
  const title = "About Us - Festival Campgrounds";
  const description = "";
  return (
    <Layout title={title} description={description}>
      <Hero>
        <HeroBody className="container">
          <Title className="position-absolute display-4 text-white font-weight-bold">
            About Us
          </Title>
        </HeroBody>
        <Mask />
      </Hero>
      <section className="section">
        <div className="container">
          <h1>Festival Campgrounds Presents</h1>
          <p>The Coachella Ranch Glamping Experience</p>
          <p className="py-2">
            With two Ranch’s in the city of Coachella, less than 2 miles away
            from the festival grounds. Get the Desert life experience under the
            canopy of the palm trees in our “Pop-Up” Tent Camping Ranch Resort.
          </p>
          <p className="py-2">
            Imagine being in a garden of hundreds of palm trees with unlimited
            shade and green lush grass. Beautiful Mountain views enjoying nature
            by sleeping under the palm trees and stars. Your always welcome to
            relax by dipping in our pool while being surrounded by nature, lay
            on our hammocks or just hang out on our lounge sitting areas. We
            also have beauty stations for hair and make up to glam you up and
            get you ready for the Festivals. We are looking forward to hosting
            you in one of our two Ranch locations.
          </p>
        </div>
      </section>
      <section className="section px-0">
        <div className="container-fluid px-0">
          <ImageReel images={images} />
        </div>
      </section>
      <SectionWithImage className="section"></SectionWithImage>
    </Layout>
  );
}
