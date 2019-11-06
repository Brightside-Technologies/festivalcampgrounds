import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Head from "../components/Head";
import Footer from "../components/Footer";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Layout({ children, title, description }) {
  return (
    <Root>
      <Head title={title} description={description} />
      <Nav />
      <Main>{children}</Main>
      <Footer />
      <style global jsx>{`
        html {
          overflow-x: hidden;
          padding-top: 3.25rem;
        }
        .section {
          padding: 3rem 1.5rem;
        }
      `}</style>
    </Root>
  );
}
