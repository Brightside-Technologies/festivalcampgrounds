import React from "react";
import styled from "styled-components";

const Component = styled.h6`
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export default function Heading(props) {
  return <Component {...props} />;
}
