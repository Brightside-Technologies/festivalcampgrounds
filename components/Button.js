import styled from "styled-components";

const Component = styled.a`
  cursor: pointer;
  background-color: #f4778d;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f4778d 100%);
  color: white;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: white;
    text-decoration: none;
    background-color: #e45460;
    background-image: linear-gradient(62deg, #fbab7e 0%, #e45460 100%);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

const StyledButton = styled.button`
  background-color: #f4778d;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f4778d 100%);
  color: white;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: white;
    text-decoration: none;
    background-color: #e45460;
    background-image: linear-gradient(62deg, #fbab7e 0%, #e45460 100%);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

export default function Button({ className, children, ...rest }) {
  return (
    <Component {...rest} className={className}>
      {children}
    </Component>
  );
}

export function MyButton({ className, children, ...rest }) {
  return (
    <StyledButton {...rest} className={className}>
      {children}
    </StyledButton>
  );
}
