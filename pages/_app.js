import App from "next/app";
import Router from "next/router";
import withGoogleAnalytics from "next-ga";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-svg-core/styles.css";

class Site extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withGoogleAnalytics(process.env.GA_ID, Router)(Site);
