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
  background: linear-gradient(
    rgba(244, 119, 141, 0.6) 1%,
    rgba(247, 206, 104, 0.1) 100%
  );
`;

export default function Mask() {
  return <Component />;
}
