import { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
// import { Geist } from "next/font/google";

// const geist = Geist({
//   subsets: ["latin"]
// });

export default function Document() {
  // static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) =>
  //           sheet.collectStyles(<App {...props} />)
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       )
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/jpg" sizes="256x256" href="/favicon.jpg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
    // <Html>
    //   <Head>
    //     <script
    //       dangerouslySetInnerHTML={{
    //         __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PT864XJ5');`
    //       }}
    //     />
    //   </Head>
    //   <body>
    //     <noscript
    //       dangerouslySetInnerHTML={{
    //         __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PT864XJ5" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    //       }}
    //     />
    //     <Main />
    //     <NextScript />
    //     <script
    //       src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    //       integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    //       crossOrigin="anonymous"
    //     ></script>
    //     <script
    //       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    //       integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    //       crossOrigin="anonymous"
    //     ></script>
    //   </body>
    // </Html>
  );
}
