import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;
  outline-color: pink;
  cursor: pointer;
`;

function AddButton() {
  return <SubmitButton type="submit">Add</SubmitButton>;
}

export default AddButton;
