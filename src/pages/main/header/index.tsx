import React, { useEffect } from "react";
import styled from "styled-components";
import * as REDUX from "../../../redux/kanban";
import logo from "../../../assets/img/mug.png";
import { useDispatch } from "react-redux";

const Component = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #bbb3b3;
  box-shadow: 0px 1px 5px #0000005a;
  align-items: center;
  padding: 0px 25px;
`;

const Logo = styled.img`
  height: 65px;
`;
export default function HeaderComponent() {
  const dispatch = useDispatch();
  const localdata = localStorage.getItem("kanban");

  return (
    <Component>
      <Logo src={logo} />
    </Component>
  );
}
