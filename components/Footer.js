import styled from "styled-components";
import Heading from "./Heading";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem 6rem;
`;

const SocialNavLink = styled.a`
  margin: 0.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  line-height: 1.5;
  padding: 0.5rem 0.5rem;
  font-size: 1.25rem;
  height: 2rem;
  width: 2rem;
  background-color: #f4778d;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f4778d 100%);
`;

export default function Footer() {
  return (
    <StyledFooter className="bg-dark text-white">
      <div className="d-flex flex-column align-items-center">
        <Heading>Say Hello</Heading>
        <div className="d-flex">
          <SocialNavLink
            className="bg-light text-dark"
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/festivalcampgrounds/"
          >
            <i className="fab fa-instagram"></i>
          </SocialNavLink>
          <SocialNavLink
            className="bg-light text-dark"
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/festivalcampgrounds"
          >
            <i className="fab fa-facebook-f"></i>
          </SocialNavLink>
        </div>
      </div>
      <hr />
      <p className="m-0">Made with &#10084; in the Coachella Valley</p>
      <small>
        By{" "}
        <a
          className="font-weight-bold text-white"
          href="https://www.brightsidetech.io"
          target="_blank"
          rel="noopener"
        >
          Brightside Tech
        </a>
      </small>
    </StyledFooter>
  );
}
