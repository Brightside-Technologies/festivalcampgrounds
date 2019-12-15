import React from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";
import { Formik } from "formik";
import * as Yup from "yup";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import ContactForm from "../components/ContactForm";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
const PINS = [RANCHO_51, COACHELLA_FESTIVAL_GROUNDS];

const defaultMapProps = {
  center: {
    lat: 33.680541,
    lng: -116.223487
  },
  zoom: 14.5
};

const formInitialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CONTACT_FORM_VALIDATION = Yup.object({
  name: Yup.string().required("Your name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .required("Your phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  message: Yup.string().required("Your message is required"),
  consent: Yup.bool().oneOf([true], "Please agree to the terms")
});

export default function ContactPage({ data, metadata }) {
  const { title, description } = metadata;
  const { camps } = data;

  const [status, setStatus] = React.useState(null);

  async function handleSubmit(data, formikProps) {
    const { setSubmitting, resetForm } = formikProps;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));

    setSubmitting(false);
    resetForm();
  }

  function renderMarkers(props) {
    const { map, maps } = props;
    PINS.forEach(pin => {
      new maps.Marker({
        position: { lat: pin.lat, lng: pin.lng },
        map,
        title: pin.title,
        animation: maps.Animation.DROP,
        label: {
          text: pin.label,
          color: "#fff"
        }
      });
    });
  }

  return (
    <Layout title={title} description={description}>
      <section>
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
              <Formik
                onSubmit={handleSubmit}
                validateOnBlur
                isInitialValid={false}
                render={props => <ContactForm {...props} />}
                initialValues={formInitialValues}
                validationSchema={CONTACT_FORM_VALIDATION}
              />
              {status === "success" && (
                <div className="alert alert-success" role="alert">
                  Your message was sent successfully! You'll hear back from us
                  soon.
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-error" role="alert">
                  Oops! There was an error. Please try again or email us
                  directly at{" "}
                  <a
                    href="mailto:info@festivalcampgrounds.com"
                    class="alert-link"
                  >
                    info@festivalcampgrounds.com
                  </a>
                </div>
              )}
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
      camps: campsData.default.filter(c => c.slug !== "rancho-alvarado")
    },
    metadata
  };
};
