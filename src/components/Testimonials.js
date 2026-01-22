import Carousel from "react-multi-carousel";
import ArrowButton from "./ArrowButton";
import "react-multi-carousel/lib/styles.css";
import CarouselDot from "./CarouselDot";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
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

export default function Testimonials({ testimonials }) {
  return (
    <Carousel
      customDot={<CarouselDot />}
      arrows
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      swipeable
      draggable={false}
      showDots
      responsive={responsive}
      ssr
      infinite
      keyBoardControl
      containerClass="py-10"
      minimumTouchDrag={10}
      itemClass="px-1"
    >
      {testimonials.map((t, index) => {
        return (
          <div key={index} className="h-full pt-5">
            {/* Card */}
            <div className="flex h-full flex-col bg-white shadow border">
              {/* Header (was CardHeader styled component) */}
              <div className="relative mx-[4%] -mt-5 flex flex-col items-center justify-center rounded p-4 text-center text-white shadow-[0_5px_11px_rgba(0,0,0,0.18),0_4px_15px_rgba(0,0,0,0.15)] bg-gradient-to-tr from-[#fbab7e] to-[#f4778d]">
                {/* Avatar */}
                <img
                  alt={t.name}
                  src={t.image}
                  className="absolute top-0 h-16 w-16 -translate-y-1/2 rounded-full border border-white/70 object-cover"
                />

                <h5 className="m-0 pt-4 text-lg font-bold">{t.name}</h5>
                <p className="m-0 text-sm">{t.location}</p>
              </div>

              {/* Body */}
              <div className="flex-1 p-4">
                <div className="text-sm leading-relaxed text-gray-900">
                  {t.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
