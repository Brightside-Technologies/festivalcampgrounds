import Carousel from "react-multi-carousel";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CardHeader = styled.div`
  margin-top: -1.25rem;
  margin-right: 4%;
  margin-left: 4%;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
  ${"" /* background: linear-gradient(40deg, #2096ff, #05ffa3) !important; */}
  border-radius: 0.25rem;
  padding: 1.6rem 1rem;
  color: #fff;
  text-align: center;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
`;

const LeftArrow = ({ onClick }) => (
  <ArrowButton variant="left" onClick={() => onClick()} />
);
const RightArrow = ({ onClick }) => (
  <ArrowButton variant="right" onClick={() => onClick()} />
);

export default function Testimonials({ testimonials }) {
  return (
    <>
      <Carousel
        arrows
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //autoPlay={true}
        //autoPlaySpeed={1000}
        keyBoardControl={true}
        //customTransition="all .5"
        //transitionDuration={500}
        containerClass=" py-5"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="col-sm-4 p-1">
        {testimonials.map((t, index) => {
          return (
            <div key={index} className="card h-100">
              <CardHeader>
                <h5 className="card-title">{t.name}</h5>
              </CardHeader>
              <div className="card-body">
                <div className="card-text">{t.description}</div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <style jsx>
        {`
          .card {
            margin-top: 1.25rem !important;
          }
        `}
      </style>
    </>
  );
}
