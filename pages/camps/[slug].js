import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Layout from "../../containers/Layout";
import Mask from "../../components/Mask";

const Hero = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 3.25rem);
  background: ${props => `url(${props.bgImg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const HeroBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Title = styled.h1`
  z-index: 1;
  padding-top: 2rem;
`;

const BackButon = styled.a`
  position: absolute;
  z-index: 5;
  margin: 0.5rem;
  .icon {
    margin-right: 0.25rem;
  }
`;

export default function CampDetailsPage() {
  const router = useRouter();
  const [camp, setCamp] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const { slug } = router.query;
      const data = await import("../../_data/camps.json");
      const camp = data.default.filter(items => items.slug === slug)[0];
      setCamp(camp);
    }
    getData();
  }, []);

  return (
    camp && (
      <Layout title="" description="">
        <Hero bgImg={camp.image}>
          <BackButon className="btn btn-sm btn-outline-light" href="/camps">
            <span className="icon">
              <i className="fas fa-arrow-left" />
            </span>
            <span className="font-weight-bold text-uppercase">Camps</span>
          </BackButon>
          <HeroBody className="container">
            <Title className="position-absolute display-4 text-white font-weight-bold">
              {camp.name}
            </Title>
          </HeroBody>
          <Mask />
        </Hero>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p>{camp.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              {camp.options.map((option, index) => {
                return (
                  <div key={index} className="col-lg-12">
                    <div className="card mb-3 rounded-0">
                      <div className="row no-gutters">
                        <div className="col-md-4 d-flex">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                              <h4 className="card-title">{option.name}</h4>
                              <h5 className="card-text text-muted">{`From $${option.starting_price}`}</h5>
                              <div className="pt-3">
                                <p>Bed(s): {option.bed_count}</p>
                                <p>Style: {option.style}</p>
                                <p>Capacity: {option.capacity}</p>
                                <p>Size: {option.size}</p>
                                <p>Guests: {option.guests}</p>
                              </div>

                              {/* <p className="card-text text-muted">
                                <a
                                  className="px-0 btn btn-link d-inline-flex align-items-center"
                                  target="_blank"
                                  rel="noopener"
                                  href={camp.directions}
                                >
                                  <Icon className="ml-0 fas fa-map-marker-alt"></Icon>{" "}
                                  {camp.address}
                                </a>
                              </p> */}
                            </div>
                            <div className="d-flex justify-content-start">
                              <Link
                                href="/accomodation/[slug]"
                                as={`/accomodation/${option.slug}`}
                              >
                                <a className="btn btn-primary">Details</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <img
                            src={option.images[0]}
                            className="card-img rounded-0"
                            alt={option.name}
                            style={{ height: "100%", objectFit: "cover" }}
                          />
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
    )
  );
}
