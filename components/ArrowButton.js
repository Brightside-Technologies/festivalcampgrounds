import styled from "styled-components";

const StyledButton = styled.button`
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  background-color: #f4778d;
  background: linear-gradient(
    rgba(244, 119, 141, 0.85) 50%,
    rgba(247, 206, 104, 0.5) 100%
  );
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
    color: white;
    font-size: 1.5rem;
  }
  &:hover {
    background-color: #e45460;
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
    <StyledButton
      aria-label="Carousel button"
      className={`${variant}-arrow`}
      onClick={onClick}
    >
      <i className={`fas fa-chevron-${variant}`} />
    </StyledButton>
  );
}
