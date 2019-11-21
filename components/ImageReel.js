import Carousel from "react-multi-carousel";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import "react-multi-carousel/lib/styles.css";
import CarouselDot from "./CarouselDot";

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

export default function ImageReel({
  images,
  containerClass,
  itemClass,
  centerMode,
  partialVisible
}) {
  return (
    <Carousel
      customDot={<CarouselDot />}
      centerMode={centerMode}
      partialVisbile={partialVisible}
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
      minimumTouchDrag={1}
      keyBoardControl={true}
      containerClass={containerClass}
      itemClass={itemClass}
    >
      {images.map((image, index) => {
        return <Image src={image} key={index} />;
      })}
    </Carousel>
  );
}
