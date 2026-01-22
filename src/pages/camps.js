import Link from "next/link";
import clsx from "clsx";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import Button from "../components/Button";
import { MapPin } from "lucide-react";
import React from "react";

const DetailsButtonWithRef = React.forwardRef(function DetailsButtonWithRef(
  { children, href, className, ...props },
  ref
) {
  return (
    <Button ref={ref} href={href} className={className} {...props}>
      {children}
    </Button>
  );
});

export default function CampsPage({ data, metadata }) {
  const { title, description } = metadata;

  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="py-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="pt-3 pb-1">{title}</PageTitle>

          <div className="space-y-4">
            {data.map((camp, index) => (
              <div key={index} className="my-1">
                <div className="overflow-hidden shadow mb-3">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-5/12">
                      <img
                        src={camp.image}
                        alt={camp.name}
                        className="h-64 w-full object-cover md:h-full"
                      />
                    </div>

                    <div className="flex md:w-7/12">
                      <div className="flex w-full flex-col justify-between p-4">
                        <div>
                          <h5 className="text-lg font-semibold">{camp.name}</h5>
                          <p className="mt-2 text-sm text-gray-800">
                            {camp.description}
                          </p>

                          <p className="mt-3 text-sm text-gray-500">
                            <a
                              className={clsx(
                                "inline-flex items-center px-0 text-gray-900",
                                "hover:underline"
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={camp.directions}
                            >
                              <span className="mr-2 inline-flex">
                                <MapPin className="h-9 w-9" />
                              </span>
                              {camp.address}
                            </a>
                          </p>
                        </div>

                        <div className="mt-4 flex justify-start">
                          <Link
                            passHref
                            href="/camping/[slug]"
                            as={`/camping/${camp.slug}`}
                          >
                            <DetailsButtonWithRef>Details</DetailsButtonWithRef>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const dataAsync = import("../_data/camps.json");
  const data = await dataAsync;

  const metadata = {
    title: "Camps",
    description: ""
  };

  return {
    props: {
      data: data.default,
      metadata
    }
  };
}
