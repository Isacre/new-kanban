import React from "react";
import styled from "styled-components";
import logo from "../../../assets/img/mug.png";

const Component = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #dea057;
  box-shadow: 0px 2px 5px #0000005a;
  align-items: center;
  padding: 0px 25px;
`;

const Logo = styled.img`
  height: 65px;
`;
export default function HeaderComponent() {
  return (
    <Component>
      <Logo src={logo} />
    </Component>
  );
}
