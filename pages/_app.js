import App from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default class Site extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
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
        <Component {...pageProps} />
      </>
    );
  }
}
