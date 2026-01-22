import React from "react";
import ReactMarkdown from "react-markdown";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";

export default function InfoPage({ data, metadata }) {
  const { title, description } = metadata;
  const { terms, faq } = data;

  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      {/* Terms */}
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="pt-3 pb-1 font-light">
            Terms and Conditions
          </PageTitle>

          <ul className="mt-4 list-disc space-y-3 pl-6">
            {terms.map((t, idx) => (
              <li key={idx}>
                <p>{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6">
        <div className="mx-auto w-full max-w-6xl px-0">
          <PageTitle className="pt-3 pb-1 font-light">FAQ</PageTitle>

          <div className="mt-6 space-y-6">
            {faq.map((f, idx) => (
              <div key={idx} className="border shadow-sm">
                {/* Question row */}
                <div className="flex items-stretch">
                  <div className="flex w-[50px] max-w-[50px] items-center justify-center bg-zinc-900 p-2 text-2xl text-zinc-100">
                    Q.
                  </div>
                  <div className="flex-1 p-2">{f.question}</div>
                </div>

                <hr className="m-0 border-black/10" />

                {/* Answer row */}
                <div className="flex items-stretch">
                  <div className="flex w-[50px] max-w-[50px] items-center justify-center p-2 text-2xl">
                    A.
                  </div>
                  <div className="flex-1 p-2">
                    {/* If you have typography plugin: `prose max-w-none` looks great */}
                    <div className="prose max-w-none">
                      <ReactMarkdown>{f.answer}</ReactMarkdown>
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
  const termsDataAsync = import("../_data/terms.json");
  const faqDataAsync = import("../_data/faq.json");

  const [terms, faq] = await Promise.all([
    termsDataAsync.then((res) => res.default),
    faqDataAsync.then((res) => res.default)
  ]);

  const metadata = {
    title: "Info",
    description: ""
  };

  return {
    props: {
      data: { terms, faq },
      metadata
    }
  };
}
