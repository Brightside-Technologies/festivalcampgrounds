import styled from "styled-components";
//import Emoji from "react-emoji-render";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem 6rem;
`;

export default function Footer() {
  return (
    <StyledFooter className="bg-dark text-white">
      <hr />
      <p className="m-0">
        Made with{" "}
        {/* <span>
          <Emoji text=":heart:" />
        </span>{" "} */}
        in the Coachella Valley
      </p>
      <small>
        By{" "}
        <a
          className="has-text-weight-bold has-text-white"
          href="https://www.brightsidetech.io"
          target="_blank">
          Brightside Tech
        </a>
      </small>
    </StyledFooter>
  );
}
