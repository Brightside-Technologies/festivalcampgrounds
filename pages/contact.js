import Link from "next/link";
import styled from "styled-components";
import GoogleMap from "google-map-react";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";

const Icon = styled.i`
  height: 1.5rem !important;
  width: 1.5rem !important;
  margin-right: 0.5rem;
  color: #f4778d !important;

  svg {
    color: #f4778d !important;
  }
`;

const GOOGLE_KEY = "AIzaSyDpJ7uPwarXoVNZU24RDFeb_0CaljT8ms8";
//const GOOGLE_TOKEN = "65422";
const RANCHO_51 = {
  lat: 33.678754,
  lng: -116.210684,
  title: "Rancho 51",
  label: "51"
};
const RANCHO_ALVARADO = {
  lat: 33.681046,
  lng: -116.205803,
  title: "Rancho Alvarado",
  label: "A"
};
const COACHELLA_FESTIVAL_GROUNDS = {
  lat: 33.683023,
  lng: -116.238218,
  title: "Coachella Fest",
  label: "C"
};
const PINS = [RANCHO_51, RANCHO_ALVARADO, COACHELLA_FESTIVAL_GROUNDS];
const defaultMapProps = {
  center: {
    lat: 33.680541,
    lng: -116.223487
  },
  zoom: 14.5
};

export default function ContactPage({ data, metadata }) {
  const { title, description } = metadata;
  const { camps } = data;

  function renderMarkers(props) {
    const { map, maps } = props;
    let markers = PINS.map(pin => {
      return new maps.Marker({
        position: { lat: pin.lat, lng: pin.lng },
        map,
        title: pin.title,
        animation: maps.Animation.DROP,
        label: {
          text: pin.label,
          color: "#fff"
        }
        // icon: {
        //   path:
        //     "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
        //   fillColor: pin.color,
        //   fillOpacity: 1,
        //   strokeColor: pin.color,
        //   strokeWeight: 2,
        //   scale: 1
        // }
      });
    });
  }

  return (
    <Layout title={title} description={description}>
      <section className="">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-8 d-flex">
              <div
                style={{ minHeight: "calc(100vh - 3.25rem)", width: "100%" }}
              >
                <GoogleMap
                  bootstrapURLKeys={{ key: GOOGLE_KEY }}
                  defaultCenter={defaultMapProps.center}
                  defaultZoom={defaultMapProps.zoom}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={renderMarkers}
                />
              </div>
            </div>
            <div className="col-md-4 px-4 flex-column d-flex">
              <PageTitle className="pt-3 pb-1 h3">{title}</PageTitle>
              <div className="py-2">
                <div className="d-flex align-items-center mb-3">
                  <Icon className="fas fa-phone" />
                  <a className="text-dark" href="tel:+1-760-578-5944">
                    +1 (760) 578 5944
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <Icon className="fas fa-envelope" />
                  <a
                    className="text-dark"
                    href="mailto:info@festivalcampgrounds.com"
                  >
                    info@festivalcampgrounds.com
                  </a>
                </div>
                {camps.map((c, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <Icon className="fas fa-map-marker-alt" />
                      <div>
                        <p className="m-0 lead">{c.name}</p>
                        <a
                          className="text-dark"
                          href={c.directions}
                          target="_blank"
                          rel="noopener"
                        >
                          {c.address}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <PageTitle className="pt-3 pb-1 h3">Leave a Message</PageTitle>
              <form className="py-2">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small> */}
                </div>
                <div className="form-group">
                  <label for="phone">Phone</label>
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    aria-describedby="phoneHelp"
                  />
                  {/* <small id="phoneHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small> */}
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="consent"
                  />
                  <label className="form-check-label" for="consent">
                    I consent to Festival Campgrounds collecting my details
                    through this form.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

ContactPage.getInitialProps = async () => {
  const campsDataAsync = import("../_data/camps.json");
  const campsData = await campsDataAsync;
  const metadata = {
    title: "Contact Us",
    description: ""
  };

  return {
    data: {
      camps: campsData.default
    },
    metadata
  };
};
