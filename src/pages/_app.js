import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/js/all.min.js";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap"
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${geist.style.fontFamily};
        }
      `}</style>
      {/* <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-58JM20L3GC"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-58JM20L3GC');
              `
            }}
          />
        </Head>
        <Component {...pageProps} /> */}
      <main className="flex-1 flex flex-col w-full h-full min-h-screen">
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-58JM20L3GC" />
        <GoogleTagManager gtmId="GTM-PT864XJ5" />
      </main>
    </>
  );
}
