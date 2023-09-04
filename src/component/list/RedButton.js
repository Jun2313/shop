import React from 'react';
import styled from "styled-components";

let Redbutton = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function RedButton() {
  return (
    <Redbutton bg="blue">버튼</Redbutton>
  );
}

export default RedButton;