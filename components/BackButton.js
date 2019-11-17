import styled from "styled-components";

const Component = styled.a`
  position: absolute;
  z-index: 5;
  margin: 0.5rem;
  .icon {
    margin-right: 0.25rem;
  }
`;

export default function BackButton({ className, children, ...rest }) {
  return (
    <Component {...rest} className={className}>
      {children}
    </Component>
  );
}
