import React from "react";
import styled from "styled-components";
import Board from "./board";
import HeaderComponent from "./header/";

const Component = styled.div`
  min-width: 100vw;
  height: 100vh;
  background-color: #fcffe7;
`;

export default function MainPage() {
  return (
    <Component>
      <HeaderComponent />
      <Board />
    </Component>
  );
}
