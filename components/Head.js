import React from "react";
import NextHead from "next/head";

const defaultOGImage = "/images/thumbnail.png";

//TODO: can we compute page url here?

const Head = ({ description, title, url }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta
      name="google-site-verification"
      content="6COzxjGMpc3ctc0Bgc5RJ64INZvcxM4h7gC6ihQg5Wg"
    />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" /> */}
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={defaultOGImage} />
    <meta property="og:image" content={defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156449586-1"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-156449586-1');
    `
      }}
    ></script>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-679239646"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'AW-679239646');
    `
      }}
    ></script>
  </NextHead>
);

export default Head;
