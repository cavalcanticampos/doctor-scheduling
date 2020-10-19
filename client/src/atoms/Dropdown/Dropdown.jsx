import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Container, Title, Values, Item } from "./styles";

const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <Container width={props.width}>
      <Title isOpen={isOpen} onClick={toggleDropdown}>
        {props.selectedItem && props.data !== []
          ? props.data.find((item) => item.name === props.selectedItem).name
          : props.placeholder}
        <MdKeyboardArrowRight />
      </Title>
      <Values isOpen={isOpen} width={props.width}>
        {props.data !== [] &&
          props.data.map((item) => (
            <Item
              key={item._id}
              onClick={() => {
                toggleDropdown();
                // eslint-disable-next-line no-restricted-globals
                props.onClick(event);
              }}
              id={item.name}
            >
              {item.name}
            </Item>
          ))}
      </Values>
    </Container>
  );
};

export default Dropdown;
