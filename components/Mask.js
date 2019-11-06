import styled from "styled-components";

const Component = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-attachment: fixed;
  background: url(https://mdbootstrap.com/wp-content/themes/mdbootstrap4/img/overlays/04.png);
  ${
    "" /* background: url(https://mdbootstrap.com/wp-content/themes/mdbootstrap4/img/overlays/02.png); */
  }
  ${"" /* background-color: rgba(62, 69, 81, 0.3); */}
  ${"" /* background: linear-gradient(40deg,#2096ff,#05ffa3) !important; */}
  background: linear-gradient(rgba(32, 150, 255, 0.33) 0%, rgba(5, 255, 163, 0.33) 100%);
`;

export default function Mask() {
  return <Component />;
}
