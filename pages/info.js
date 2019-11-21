import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";

const QALabel = styled.span`
  width: 50px;
  max-width: 50px;
  text-align: center;
`;

export default function CampsPage({ data, metadata }) {
  const { title, description } = metadata;
  const { terms, faq } = data;
  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="section">
        <div className="container px-0">
          <PageTitle className="pt-3 pb-1">Terms and Conditions</PageTitle>
          <ul>
            {terms.map(t => (
              <li>
                <p>{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container px-0">
          <PageTitle className="pt-3 pb-1">FAQ</PageTitle>
          {faq.map(f => {
            return (
              <div className="my-5 shadow-sm border">
                <div className="d-flex align-items-stretch">
                  <QALabel className="bg-dark text-light h4 p-2 m-0">
                    Q.
                  </QALabel>
                  <div className="p-1 w-100">{f.question}</div>
                </div>
                <hr className="m-0" />
                <div className="d-flex align-items-stretch">
                  <QALabel className="h4 p-2 m-0">A.</QALabel>
                  <div className="p-1 w-100">
                    <ReactMarkdown source={f.answer} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

CampsPage.getInitialProps = async () => {
  const termsDataAsync = import("../_data/terms.json");
  const faqDataAsync = import("../_data/faq.json");

  const promises = [termsDataAsync, faqDataAsync].map(p =>
    p.then(res => res.default)
  );

  const [terms, faq] = await Promise.all(promises);

  const metadata = {
    title: "Info",
    description: ""
  };

  return {
    data: {
      terms,
      faq
    },
    metadata
  };
};
