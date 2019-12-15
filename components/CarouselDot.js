import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 1;
  padding: 5px 5px 5px 5px;
  box-shadow: none;
  transition: background 0.5s;
  border-width: 2px;
  border-style: solid;
  border-color: #343a40;
  padding: 0;
  margin: 0;
  margin-right: 0px;
  margin-right: 6px;
  outline: 0 !important;
  cursor: pointer;
  background-color: ${props => (props.isActive ? "#f4778d" : "#343a40 ")};
  &:hover {
    background-color: #e45460;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function CarouselDot({ onClick, active, index, carouselState }) {
  return (
    <Item>
      <Button
        aria-label="Carousel Dot"
        isActive={active}
        onClick={onClick}
      ></Button>
    </Item>
  );
}
