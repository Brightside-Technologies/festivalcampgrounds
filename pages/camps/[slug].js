import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Layout from "../../containers/Layout";
import Mask from "../../components/Mask";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";

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

const BackButtonWithRef = React.forwardRef(
  ({ children, href, className }, ref) => {
    return (
      <BackButton ref={ref} href={href} className={className}>
        {children}
      </BackButton>
    );
  }
);

const DetailsButtonWithRef = React.forwardRef(
  ({ children, href, className }, ref) => {
    return (
      <Button ref={ref} href={href} className={className}>
        {children}
      </Button>
    );
  }
);

export default function CampDetailsPage() {
  const router = useRouter();
  const [camp, setCamp] = React.useState(null);
  const [campingOptions, setCampingOptions] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const { slug } = router.query;
      const data = await import("../../_data/camps.json");
      const camp = data.default.filter(items => items.slug === slug)[0];
      setCamp(camp);
      const campingOptionsData = await import(
        "../../_data/camping-options.json"
      );
      let options = campingOptionsData.default;
      const mergedOptions = camp.options.map(item => {
        const slug = Object.keys(item)[0];
        const option = options.filter(o => o.slug === slug)[0];
        return { ...option, ...item[slug] };
      });
      setCampingOptions(mergedOptions);
    }
    getData();
  }, []);

  return (
    camp &&
    campingOptions && (
      <Layout title="" description="">
        <Hero bgImg={camp.image}>
          <Link href="/camps" passHref>
            <BackButtonWithRef className="btn btn-sm btn-outline-light">
              <span className="icon">
                <i className="fas fa-arrow-left" />
              </span>
              <span className="font-weight-bold text-uppercase">Camps</span>
            </BackButtonWithRef>
          </Link>
          <HeroBody className="container">
            <div className="position-absolute" style={{ zIndex: 5 }}>
              <Title className="mb-0 display-4 text-white font-weight-bold text-center">
                {camp.name}
              </Title>
              {camp.subtitle && (
                <Title className="p-0 m-0 h1 text-light text-center">
                  {camp.subtitle}
                </Title>
              )}
            </div>
          </HeroBody>
          <Mask />
        </Hero>
        <section className="section">
          <div className="container px-0">
            <div className="row">
              <div className="col-sm-12">
                <p>{camp.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container px-0">
            <div className="row">
              {campingOptions.map((option, index) => {
                return (
                  <div key={index} className="col-lg-12 my-1">
                    <div className="card shadow mb-3 rounded-0">
                      <div className="row no-gutters">
                        <div className="col-md-6 col-lg-4 d-flex">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                              <h4 className="card-title">{option.name}</h4>
                              <h5 className="card-text text-muted">{`From $${option.starting_price_per_night} per night`}</h5>
                              <div className="pt-3">
                                <p>Bed(s): {option.bed_count}</p>
                                <p>Style: {option.style}</p>
                                <p>Capacity: {`${option.capacity} people`}</p>
                                <p>Size: {option.size}</p>
                                <p>Guests: {option.guests}</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-start">
                              <Link
                                href="/accommodation/[camp]/[slug]"
                                as={`/accommodation/${camp.slug}/${option.slug}`}
                                passHref
                              >
                                <DetailsButtonWithRef>
                                  Details
                                </DetailsButtonWithRef>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-8">
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
