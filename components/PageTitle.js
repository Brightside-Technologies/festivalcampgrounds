import styled from "styled-components";

const StyledHeader = styled.h1`
  margin-bottom: 1.5rem;
`;

export default function PageTitle({ children, className }) {
  return (
    <StyledHeader className={`font-weight-bold ${className || ""}`}>
      {children}
    </StyledHeader>
  );
}
