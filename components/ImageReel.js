import Carousel from "react-multi-carousel";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const LeftArrow = ({ onClick }) => (
  <ArrowButton variant="left" onClick={() => onClick()} />
);
const RightArrow = ({ onClick }) => (
  <ArrowButton variant="right" onClick={() => onClick()} />
);

const Image = styled.img`
  object-fit: cover;
  height: 450px;
  width: 100%;
`;

export default function ImageReel({ images }) {
  return (
    <Carousel
      centerMode
      //partialVisbile
      focusOnSelect
      arrows
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      swipeable={true}
      draggable={true}
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
      containerClass="py-5"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      //dotListClass="custom-dot-list-style"
      itemClass="mx-1">
      {images.map((image, index) => {
        return <Image src={image} key={index} />;
      })}
    </Carousel>
  );
}
