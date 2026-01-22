import React from "react";
import Layout from "../containers/Layout";
import Mask from "../components/Mask";
import ImageReel from "../components/ImageReel";
import Markdown from "react-markdown";
import IconRenderer from "../components/IconRenderer";
import clsx from "clsx";

export default function AboutUsPage({ metadata, data }) {
  const { title: page_title, description } = metadata;
  const {
    images,
    title,
    subtitle,
    hero_image,
    amenities,
    amenities_images,
    content
  } = data;

  return (
    <Layout title={page_title} description={description}>
      {/* Hero */}
      <section
        className="relative flex h-[calc(100vh-3.25rem)] w-full flex-col justify-between bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${hero_image})` }}
      >
        {/* overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-start justify-center px-4">
          <div className="mt-20 flex flex-col items-center justify-center text-center">
            <h1 className="my-5 text-5xl font-light text-white md:text-6xl">
              About Us
            </h1>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              {title}
            </h2>
            <h3 className="mt-2 text-lg font-normal text-white md:text-xl">
              {subtitle}
            </h3>
          </div>
        </div>

        {/* <Mask /> */}
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="prose max-w-none">
            <img
              alt="Juan and Claudia"
              src="/images/j&c.jpg"
              className="m-4 mt-0 w-full max-w-[200px] rounded sm:float-left"
            />
            <Markdown>{content}</Markdown>

            {/* ensures the container expands after the float */}
            <div className="clear-both" />
          </div>
        </div>
      </section>

      {/* Image reel */}
      <section className="px-0 py-12">
        <div className="w-full px-0">
          <ImageReel
            containerClass="h-100 pb-10"
            itemClass="mx-1"
            centerMode
            images={images}
          />
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold">
                Everything you need for the maximum experience
              </h2>

              <div className="mt-4 space-y-3">
                {amenities.map((a, index) => (
                  <div key={index} className="flex items-center">
                    {a.icon && (
                      <span className="mr-2 flex items-center text-[#f4778d]">
                        <IconRenderer name={a.icon} size={36} />
                      </span>
                    )}
                    <p className="m-0 text-base">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ImageReel
                containerClass="h-100 pb-10"
                images={amenities_images}
              />
            </div>

            {/* Alert */}
            <div className="md:col-span-2">
              <div
                className={clsx(
                  "rounded-md bg-[#fae7e8] p-[10px]",
                  "border-l-[6px] border-l-[#f4778d]"
                )}
              >
                To book your hair &amp; makeup email us to&nbsp;
                <a
                  className="font-bold text-gray-900 underline-offset-2 hover:underline"
                  href="mailto:rancho51inc@gmail.com"
                >
                  rancho51inc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const dataAsync = import("../_data/pages/about-us.json");
  const [page_data] = await Promise.all([dataAsync.then((res) => res.default)]);

  const { metadata, ...data } = page_data;

  return {
    props: {
      data,
      metadata
    }
  };
}
