import Link from "next/link";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import Button from "../components/Button";

const Icon = styled.i`
  height: 36px;
  width: 36px;
  margin: 0.5rem;
`;

const DetailsButtonWithRef = React.forwardRef(
  ({ children, href, className }, ref) => {
    return (
      <Button ref={ref} href={href} className={className}>
        {children}
      </Button>
    );
  }
);

export default function CampsPage({ data, metadata }) {
  const { title, description } = metadata;
  return (
    <Layout title={`${title} - Festival Campgrounds`} description={description}>
      <section className="section">
        <div className="container px-0">
          <PageTitle className="pt-3 pb-1">{title}</PageTitle>
          <div className="row">
            {data.map((camp, index) => {
              return (
                <div key={index} className="col-lg-12 my-1  ">
                  <div className="card shadow mb-3 rounded-0">
                    <div className="row no-gutters">
                      <div className="col-md-5">
                        <img
                          src={camp.image}
                          className="card-img rounded-0"
                          alt={camp.name}
                          style={{ height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-7 d-flex">
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title">{camp.name}</h5>
                            <p className="card-text">{camp.description}</p>
                            <p className="card-text text-muted">
                              <a
                                className="px-0 btn btn-link text-dark d-inline-flex align-items-center"
                                target="_blank"
                                rel="noopener"
                                href={camp.directions}
                              >
                                <Icon className="ml-0 fas fa-map-marker-alt"></Icon>{" "}
                                {camp.address}
                              </a>
                            </p>
                          </div>
                          <div className="d-flex justify-content-start">
                            <Link
                              passHref
                              href="/camps/[slug]"
                              as={`/camps/${camp.slug}`}
                            >
                              <DetailsButtonWithRef>
                                Details
                              </DetailsButtonWithRef>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

CampsPage.getInitialProps = async () => {
  const dataAsync = import("../_data/camps.json");
  const data = await dataAsync;
  const metadata = {
    title: "Camps",
    description: ""
  };
  return {
    data: data.default,
    metadata
  };
};
