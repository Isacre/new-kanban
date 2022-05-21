import React from "react";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import * as REDUX from "../../../../../redux/kanban";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: black;
  font-weight: lighter;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
const Title = styled.div``;
interface Props {
  card: {
    id: string;
    title: string;
    description: string;
  };
  index: number;
  columnindex: number;
}

const DeleteCardButton = styled.div`
  display: flex;
  cursor: pointer;
  color: black;
  transition: all ease-in-out 0.2s;
  :hover {
    color: red;
  }
`;
export default function Card(props: Props) {
  const dispatch = useDispatch();
  function deleteCard() {
    const payload = {
      columnindex: props.columnindex,
      cardindex: props.index,
    };
    dispatch(REDUX.deleteCard(payload));
  }
  const { card, index } = props;
  return (
    <Container>
      <Title>{card.title}</Title>
      <DeleteCardButton onClick={deleteCard}>
        <TiDeleteOutline />
      </DeleteCardButton>
    </Container>
  );
}
