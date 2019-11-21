import Carousel from "react-multi-carousel";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import "react-multi-carousel/lib/styles.css";
import CarouselDot from "./CarouselDot";

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
  background-color: #f4778d;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f4778d 100%);
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
        customDot={<CarouselDot />}
        arrows
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        containerClass=" py-5"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        //dotListClass="custom-dot-list-style"
        //customTransition="all .5"
        //transitionDuration={500}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //autoPlay={true}
        //autoPlaySpeed={1000}
        minimumTouchDrag={10}
        itemClass="col-sm-4 p-1"
      >
        {testimonials.map((t, index) => {
          return (
            <div key={index} className="card h-100">
              <CardHeader>
                <h5 className="card-title font-weight-bold">{t.name}</h5>
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
