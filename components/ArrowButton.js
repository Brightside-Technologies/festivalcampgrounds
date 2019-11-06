import styled from "styled-components";

const StyledButton = styled.button`
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  ${"" /* background-color: rgba(0, 0, 0, 0.1); */}
  background: linear-gradient(40deg,rgba(32, 150, 255, 0.5),rgba(5, 255, 163, 0.5)) !important;
  border: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 1;

  svg {
    height: 100%;
    width: 100%;
    ${"" /* color: rgba(0, 0, 0, 0.75); */}
    color: white;
    font-size: 1.5rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
  &:focus {
    outline: none;
  }
  &.left-arrow {
    left: 0px;
  }
  &.right-arrow {
    right: 0px;
  }
`;

export default function ArrowButton({ variant, onClick }) {
  return (
    <StyledButton className={`${variant}-arrow`} onClick={onClick}>
      <i className={`fas fa-chevron-${variant}`} />
    </StyledButton>
  );
}
