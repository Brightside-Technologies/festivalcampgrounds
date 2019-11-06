import App from "next/app";
import Router from "next/router";
import withGoogleAnalytics from "next-ga";

class Site extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withGoogleAnalytics(process.env.GA_ID, Router)(Site);
