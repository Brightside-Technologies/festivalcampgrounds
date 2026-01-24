import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTubeEmbed from "./YouTubeEmbed";
import CarouselDot from "./CarouselDot";
import ArrowButton from "./ArrowButton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const LeftArrow = ({ onClick }) => (
  <ArrowButton variant="left" onClick={() => onClick?.()} />
);
const RightArrow = ({ onClick }) => (
  <ArrowButton variant="right" onClick={() => onClick?.()} />
);

export default function YouTubeCarousel({
  videos = [],
  title = "Videos",
  itemClass,
  containerClass
}) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="youtube-carousel">
      <Carousel
        customDot={<CarouselDot />}
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        responsive={responsive}
        infinite
        autoPlay={false}
        keyBoardControl
        containerClass={containerClass}
        itemClass="px-1"
        removeArrowOnDeviceType={[]}
        showDots
        dotListClass="custom-dot-list-style"
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative h-[350px] w-full overflow-hidden rounded-md bg-black"
          >
            <YouTubeEmbed
              className={itemClass}
              video={video.url}
              title={video.title || `${title} ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
