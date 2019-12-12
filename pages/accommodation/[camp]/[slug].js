import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { useRouter } from "next/router";
import Layout from "../../../containers/Layout";
import Mask from "../../../components/Mask";
import Heading from "../../../components/Heading";
import ImageReel from "../../../components/ImageReel";
import BackButton from "../../../components/BackButton";
import Button from "../../../components/Button";
import {BOOK_NOW_URL} from "../../../constants"

const Hero = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  background: ${props => `url(${props.bgImg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
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
`;

const Card = styled.div`
  margin-top: -7rem;
`;
const Icon = styled.i`
  height: 36px;
  width: 36px;
  margin-right: 0.5rem;
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

export default function OptionDetailsPage() {
  const router = useRouter();
  const { slug, camp: campSlug } = router.query;
  const [campingOption, setCampingOption] = React.useState(null);
  const [camp, setCamp] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const campingOptionsDataAsync = import(
        "../../../_data/camping-options.json"
      );
      const campsDataAsync = import("../../../_data/camps.json");

      const campingOptionsData = await campingOptionsDataAsync;
      const campsData = await campsDataAsync;

      const camp = campsData.default.filter(
        items => items.slug === campSlug
      )[0];
      setCamp(camp);

      const campOptionOverrideProps = camp.options.filter(
        item => Object.keys(item)[0] === slug
      )[0][slug];

      const option = campingOptionsData.default.filter(
        items => items.slug === slug
      )[0];

      setCampingOption({ ...option, ...campOptionOverrideProps });
    }
    getData();
  }, []);

  return (
    campingOption &&
    camp && (
      <Layout title={`${camp.name} | ${campingOption.name}`} description="">
        <Hero bgImg={campingOption.images[0]}>
          <Link href="/camping/[slug]" as={`/camping/${campSlug}`} passHref>
            <BackButtonWithRef className="btn btn-sm btn-outline-light">
              <span className="icon">
                <i className="fas fa-arrow-left" />
              </span>
              <span className="font-weight-bold text-uppercase">
                {camp.name}
              </span>
            </BackButtonWithRef>
          </Link>
          <HeroBody className="container">
            <Title className="pt-5 position-absolute display-4 text-white font-weight-bold">
              {campingOption.name}
            </Title>
          </HeroBody>
          <Mask />
        </Hero>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 px-0">
                <Card className="card shadow rounded-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <div>
                          <ReactMarkdown source={campingOption.description} />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pb-5">
                          <Heading className="text-uppercase m-0">From</Heading>
                          <h4 className="display-4">
                            {`$${campingOption.starting_price_per_night *
                              campingOption.minimum_stay}`}
                          </h4>
                          <Button
                            href={BOOK_NOW_URL}
                            target="_blank"
                            role="button"
                          >
                            Book Now
                          </Button>
                        </div>
                        <div className="pb-3">
                          <Heading className="h6 text-uppercase">
                            Amenities
                          </Heading>
                          {campingOption.amenities.map((a, index) => {
                            return (
                              <div
                                key={index}
                                className="d-flex align-items-center"
                              >
                                {a.icon && <Icon className={a.icon}></Icon>}
                                <p className="m-0">{a.text}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="section px-0">
          <div className="container-fluid px-0">
            <ImageReel
              containerClass="h-100"
              itemClass="mx-1"
              centerMode={true}
              images={campingOption.images}
            />
          </div>
        </section>
      </Layout>
    )
  );
}
