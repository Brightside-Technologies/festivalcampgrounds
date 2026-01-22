import React from "react";
import Layout from "../containers/Layout";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import clsx from "clsx";
import { Car, Bike, Footprints } from "lucide-react";
import CarouselDot from "@/components/CarouselDot";
import FCImage from "@/components/FCImage";

export default function HomePage({ data, metadata }) {
  const { title, description } = metadata;
  const { camping_options, testimonials, images, hero_carousel } = data;

  const featuredTestimonial = testimonials.filter((t) => t.featured)[0];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const total = hero_carousel.length;

  const goPrev = React.useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = React.useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  return (
    <Layout title={title} description={description}>
      {/* Hero */}
      <section className="relative flex h-[calc(100vh-3.25rem)] flex-col justify-between">
        <div className="relative flex-grow flex-shrink-0 max-h-[calc(100vh-3.25rem)]">
          {/* Indicators */}
          <ol className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {hero_carousel.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <CarouselDot
                  key={index}
                  className="border-2 border-white"
                  active={isActive}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </ol>

          {/* Slides */}
          <div className="relative h-full max-h-[calc(100vh-3.25rem)] overflow-hidden">
            {hero_carousel.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  {/* Use FCImage (full-bleed hero) */}
                  <FCImage
                    src={item.image}
                    alt={item.title || "Hero image"}
                    priority={index === 0}
                    // This describes the true rendered width: full-viewport
                    sizes="100vw"
                    // Wrapper fills slide; image covers
                    className="absolute inset-0"
                    imgClassName="h-[calc(100vh-3.25rem)] w-full object-cover object-center"
                    quality={75}
                  />

                  {/* Overlay for readability */}
                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-0 z-[5]",
                      "bg-gradient-to-b from-black/50 via-black/35 to-black/70"
                    )}
                  />

                  {(item.title || item.subtitle) && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center pt-12">
                      {item.title && (
                        <h5 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                          {item.title}
                        </h5>
                      )}

                      {item.subtitle && (
                        <p className="mt-2 text-center text-2xl font-normal text-white md:text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prev/Next controls */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/45 focus:outline-none ring-2 ring-white/60"
            aria-label="Previous"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/45 focus:outline-none ring-2 ring-white/60"
            aria-label="Next"
          >
            <span className="text-2xl leading-none">›</span>
          </button>
        </div>

        <Button
          href="/camping/rancho-51"
          className="absolute left-1/2 top-[80%] z-[900] -translate-x-1/2 -translate-y-1/2 border-2 border-black px-4 py-2 text-xl font-bold text-black"
        >
          Book Now
        </Button>
      </section>

      {/* YouTube embed */}
      <section className="py-12 px-1">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              title="The Oasis Rancho 51 Date Garden"
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/kbNAsyB88uc?rel=0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Distance + map */}
      <section className="py-12 px-1">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="uppercase">The distance</p>
              <h2 className="uppercase text-4xl font-light md:text-5xl">
                Closer than You think
              </h2>
              <p className="mt-3">
                There are multiple options and experiences to get to festival
                grounds. Your choice!
              </p>

              <div className="mt-4 flex items-center">
                <Car className="m-2 h-9 w-9" />
                <p className="m-0 text-lg font-semibold">5 minutes by car</p>
              </div>
              <div className="flex items-center">
                <Bike className="m-2 h-9 w-9" />
                <p className="m-0 text-lg font-semibold">15 minutes by bike</p>
              </div>
              <div className="flex items-center">
                <Footprints className="m-2 h-9 w-9" />
                <p className="m-0 text-lg font-semibold">45 minutes walking</p>
              </div>
            </div>

            <div className="md:col-span-8">
              <FCImage
                src="/images/map.jpg"
                alt="Map"
                className="w-full"
                imgClassName="w-full object-cover"
                sizes="(max-width: 767px) 100vw, 768px"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shorts embed */}
      <section className="py-12 px-1">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              title="Festival Campgrounds Short"
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/pRP7ADtEbu8?rel=0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Camping options */}
      <section className="py-12 px-1">
        <div className="mx-auto w-full max-w-6xl px-0">
          <h2 className="uppercase text-2xl font-semibold">Camping Options</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 auto-rows-[350px] lg:grid-cols-3">
            {camping_options.map((option, index) => (
              <div
                key={index}
                className={clsx("w-full px-1", index === 0 && "lg:col-span-2")}
              >
                <div className="flex h-full flex-col overflow-hidden bg-zinc-900 text-white shadow">
                  <FCImage
                    src={option.images[0]}
                    alt={option.name}
                    className="w-full"
                    imgClassName="h-[300px] w-full object-cover"
                    // rendered ~ full width on mobile; ~ 1/3 or 2/3 of 6xl on lg
                    sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 640px, 760px"
                    quality={70}
                  />
                  <div className="flex-none p-4">
                    <h5 className="m-0 text-center text-lg font-semibold">
                      {option.name}
                    </h5>
                    <p className="text-center">{option.style}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-1">
        <div className="mx-auto w-full max-w-6xl px-0">
          <h2 className="mb-10 uppercase text-2xl font-semibold">
            Here's What Our Customers Are Saying
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-5">
              <p className="uppercase">The Campgrounds</p>
              <h2 className="uppercase text-4xl font-light md:text-5xl">
                Loved Every Minute of It
              </h2>
              <p className="mt-3">{featuredTestimonial.description}</p>
              <p className="mt-4 text-xl">
                &ndash; &nbsp;{featuredTestimonial.name}
              </p>
            </div>

            <div className="sm:col-span-7">
              <FCImage
                src={featuredTestimonial.image}
                alt="Featured Testimonial"
                className="w-full"
                imgClassName="w-full object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 70vw, 700px"
                quality={75}
              />
            </div>
          </div>

          <div className="mt-6">
            <Testimonials
              testimonials={testimonials.filter((t) => !t.featured)}
            />
          </div>
        </div>
      </section>

      {/* Bottom masonry images */}
      <section className="py-12 px-1">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden bg-zinc-900 text-white"
              >
                <FCImage
                  src={image}
                  alt="image gallery"
                  className="w-full"
                  imgClassName="block w-full"
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 48px) / 2), 500px"
                  quality={65}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const campingOptionsAsync = import("../_data/camping-options.json");
  const testimonialsAsync = import("../_data/testimonials.json");

  const promises = [campingOptionsAsync, testimonialsAsync].map((p) =>
    p.then((res) => res.default)
  );

  const [camping_options, testimonials] = await Promise.all(promises);

  const images = [
    "/images/new-pool-7.jpg",
    "/images/new-pool-9.jpg",
    "/images/f-136.jpg",
    "/images/new-pool-2.jpg",
    "/images/f-140.jpg",
    "/images/new-pool-3.jpg",
    "/images/f-84.jpg",
    "/images/f-66.jpg",
    "/images/new-pool-4.jpg",
    "/images/f-54.jpg",
    "/images/new-pool-8.jpg",
    "/images/new-pool-1.jpg",
    "/images/f-38.jpg",
    "/images/new-pool-5.jpg",
    "/images/f-62.jpg",
    "/images/f-76.jpg",
    "/images/new-pool-6.jpg",
    "/images/f-128.jpg",
    "/images/fds-313.jpg"
  ];

  const hero_carousel = [
    {
      title: "Rancho 51 Festival Campgrounds",
      subtitle: "Less than 2 miles from festival grounds",
      image: "/images/new-pool-5.jpg"
    },
    {
      title: "A Desert Retreat",
      image: "/images/f-54.jpg"
    },
    {
      title: "More than a place to stay",
      subtitle: "A wonderful experience to remember forever",
      image: "/images/R51-349.jpg"
    },
    {
      title: "Camping in style",
      subtitle: "With multiple options to choose, for any needs",
      image: "/images/f-4.jpg"
    }
  ];

  const metadata = {
    title: "Festival Campgrounds",
    description:
      "Festival Campgrounds – A Desert Retreat – Coachella Festival – Stage Coach – Camping"
  };

  return {
    props: {
      data: {
        camping_options,
        testimonials,
        images,
        hero_carousel
      },
      metadata
    }
  };
}
