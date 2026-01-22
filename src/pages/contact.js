import React from "react";
import GoogleMapReact from "google-map-react";
import { Formik } from "formik";
import * as Yup from "yup";
import PageTitle from "../components/PageTitle";
import Layout from "../containers/Layout";
import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// ⚠️ Ideally move to env var (NEXT_PUBLIC_GOOGLE_MAPS_KEY)
const GOOGLE_KEY = "AIzaSyDpJ7uPwarXoVNZU24RDFeb_0CaljT8ms8";

const RANCHO_51 = {
  lat: 33.678754,
  lng: -116.210684,
  title: "Rancho 51",
  label: "51"
};
const COACHELLA_FESTIVAL_GROUNDS = {
  lat: 33.683023,
  lng: -116.238218,
  title: "Coachella Fest",
  label: "C"
};

const PINS = [RANCHO_51, COACHELLA_FESTIVAL_GROUNDS];

const defaultMapProps = {
  center: { lat: 33.680541, lng: -116.223487 },
  zoom: 13
};

const formInitialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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

  async function handleSubmit(values, formikProps) {
    const { setSubmitting, resetForm } = formikProps;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));

    setSubmitting(false);
    resetForm();
  }

  function renderMarkers({ map, maps }) {
    PINS.forEach((pin) => {
      new maps.Marker({
        position: { lat: pin.lat, lng: pin.lng },
        map,
        title: pin.title,
        animation: maps.Animation.DROP,
        label: { text: pin.label, color: "#fff" }
      });
    });
  }

  return (
    <Layout title={title} description={description}>
      <section>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Map */}
            <div className="md:col-span-8">
              <div className="md:h-[calc(100vh-3.25rem)] h-[300px] w-full">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: GOOGLE_KEY }}
                  defaultCenter={defaultMapProps.center}
                  defaultZoom={defaultMapProps.zoom}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={renderMarkers}
                />
              </div>
            </div>

            {/* Right panel */}
            <div className="md:col-span-4 flex flex-col px-6 py-6 md:px-6">
              <PageTitle className="pt-3 pb-1 text-2xl font-semibold">
                {title}
              </PageTitle>

              {/* Contact info */}
              <div className="py-2">
                <div className="mb-3 flex items-center">
                  <span className="mr-2 flex items-center text-[#f4778d]">
                    <Phone className="h-6 w-6" />
                  </span>
                  <a
                    className="text-zinc-900 hover:underline"
                    href="tel:+1-760-578-5944"
                  >
                    +1 (760) 578 5944
                  </a>
                </div>

                <div className="mb-3 flex items-center">
                  <span className="mr-2 flex items-center text-[#f4778d]">
                    <Mail className="h-6 w-6" />
                  </span>
                  <a
                    className="text-zinc-900 hover:underline"
                    href="mailto:rancho51inc@gmail.com"
                  >
                    rancho51inc@gmail.com
                  </a>
                </div>

                {camps.map((c, index) => (
                  <div key={index} className="mb-3 flex items-start">
                    <span className="mr-2 mt-1 flex items-center text-[#f4778d]">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="m-0 text-lg font-medium">{c.name}</p>
                      <a
                        className="text-zinc-900 hover:underline"
                        href={c.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.address}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <PageTitle className="pt-3 pb-1 text-2xl font-semibold">
                Leave a Message
              </PageTitle>

              <Formik
                onSubmit={handleSubmit}
                validateOnBlur
                isInitialValid={false}
                initialValues={formInitialValues}
                validationSchema={CONTACT_FORM_VALIDATION}
              >
                {(props) => <ContactForm {...props} />}
              </Formik>

              {status === "success" && (
                <div
                  className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-emerald-900"
                  role="alert"
                >
                  Your message was sent successfully! You'll hear back from us
                  soon.
                </div>
              )}

              {status === "error" && (
                <div
                  className="mt-4 rounded-md border border-rose-200 bg-rose-50 p-3 text-rose-900"
                  role="alert"
                >
                  Oops! There was an error. Please try again or email us
                  directly at{" "}
                  <a
                    href="mailto:rancho51inc@gmail.com"
                    className="font-semibold underline underline-offset-2"
                  >
                    rancho51inc@gmail.com
                  </a>
                  .
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const campsData = (await import("../_data/camps.json")).default;

  const metadata = { title: "Contact Us", description: "" };

  return {
    props: {
      data: {
        camps: campsData.filter((c) => c.slug !== "rancho-alvarado")
      },
      metadata
    }
  };
}
