import React, { useState } from "react";
import { CardTypes, ColumnTypes } from "../../../../redux/kanban/index";
import { ChangeEvent } from "react";
import * as REDUX from "../../../../redux/kanban";
import styled from "styled-components";
import Card from "./card";
import { useDispatch } from "react-redux";
import { KeyboardHandler, SaveOnLocal } from "../../../../utils";
import { motion } from "framer-motion";

const Component = styled.div`
  background-color: #d3dedc;
  color: white;
  font-weight: bold;
  border-radius: 15px 15px 2px 2px;
  width: 272px;
  min-height: 100px;
  height: fit-content;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.5);
`;

const ColumnHeader = styled.div`
  padding: 10px;
  background-color: #064663;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 5px 5px 0px 0px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 5px 10px 5px;
`;

const CreateNewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NewCardInput = styled.input`
  background-color: #fff;
  color: black;
  font-weight: lighter;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
`;

interface Props {
  index: number;
  column: ColumnTypes;
}
export default function Column(props: Props) {
  const { index, column } = props;
  const [CreatingNewCard, setCreatingNewCard] = useState(false);
  const [CardTitle, setCardTitle] = useState("");
  const dispatch = useDispatch();

  function createNewCard() {
    const payload = {
      columnId: index,
      cardtitle: CardTitle,
    };
    dispatch(REDUX.createCard(payload));
    setCreatingNewCard(false);
    setCardTitle("");
  }

  return (
    <Component>
      <ColumnHeader>{column.title}</ColumnHeader>
      <CardsWrapper>
        {column.cards.map((card: CardTypes, index: number) => {
          return <Card index={index} card={card} key={card.id} />;
        })}
        <CreateNewCard>
          {CreatingNewCard && (
            <NewCardInput
              as={motion.input}
              animate={{
                y: [-3, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.25 }}
              autoFocus={true}
              value={CardTitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCardTitle(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                KeyboardHandler(e, createNewCard, setCreatingNewCard)
              }
              onBlur={() => {
                if (CardTitle.length > 0) {
                  createNewCard();
                } else {
                  setCreatingNewCard(false);
                }
              }}
            />
          )}
          <button onClick={() => setCreatingNewCard(true)}>Create new card</button>
        </CreateNewCard>
      </CardsWrapper>
    </Component>
  );
}
