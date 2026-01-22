import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowButton from "./ArrowButton";
import CarouselDot from "./CarouselDot";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 1, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 991, min: 768 }, items: 1, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1, slidesToSlide: 1 }
};

const LeftArrow = ({ onClick }) => (
  <ArrowButton variant="left" onClick={() => onClick?.()} />
);
const RightArrow = ({ onClick }) => (
  <ArrowButton variant="right" onClick={() => onClick?.()} />
);

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
      partialVisible={partialVisible}
      focusOnSelect
      arrows
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      swipeable
      draggable
      showDots
      responsive={responsive}
      ssr
      infinite
      minimumTouchDrag={1}
      keyBoardControl
      containerClass={containerClass}
      itemClass={itemClass}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="h-[450px] w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
