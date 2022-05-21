import React, { useEffect } from "react";
import { SaveOnLocal } from "../../utils";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Board from "./board";
import HeaderComponent from "./header/";
import * as REDUX from "../../redux/kanban/index";

const Component = styled.div`
  min-width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255);
`;

export default function MainPage() {
  const localData = localStorage.getItem("kanban");
  const data = localData && JSON.parse(localData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localData) {
      SaveOnLocal("kanban", data);
    }
    dispatch(REDUX.updateKanban(data.columns));
  }, [localData]);
  return (
    <Component>
      {/* <HeaderComponent /> */}
      <Board />
    </Component>
  );
}
