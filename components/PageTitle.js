import styled from "styled-components";

const StyledHeader = styled.h1`
  margin-bottom: 1.5rem;
`;

export default function PageTitle({ children }) {
  return (
    <StyledHeader className="display-4 font-weight-bold">
      {children}
    </StyledHeader>
  );
}
