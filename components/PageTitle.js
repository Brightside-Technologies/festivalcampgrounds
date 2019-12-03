import styled from "styled-components";

const StyledHeader = styled.h1`
  margin-bottom: 1.5rem;
`;

export default function PageTitle({ children, className, style }) {
  return (
    <StyledHeader className={className} style={style}>
      {children}
    </StyledHeader>
  );
}
