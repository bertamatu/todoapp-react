import React from "react";
import { MdDelete } from "react-icons/md";
import FlipMove from "react-flip-move";
import styled from "styled-components";

const ItemContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemText = styled.input`
  padding: 0.5rem;
  border: none;
  width: 70%;
  border-radius: 0.2rem;
  outline-color: pink;
  background-color: rgba(255, 255, 255, 0.4);
`;

const BinIcon = styled(MdDelete)`
  color: lightcoral;
  font-size: 1.9rem;
  cursor: pointer;
`;

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item, key) => {
    return (
      <ItemContainer key={item.key}>
        <ItemText
          type="text"
          id={item.key}
          value={item.text}
          onChange={(e) => {
            props.setUpdate(e.target.value, item.key);
          }}
        />
        <span>
          {/* <MdEdit /> */}
          <BinIcon onClick={() => props.deleteItem(item.key)} />
        </span>
      </ItemContainer>
    );
  });
  return (
    <section>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </section>
  );
}

export default ListItems;
