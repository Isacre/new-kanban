import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { KeyboardHandler, onBlurHandler } from "../../../utils";
import * as REDUX from "../../../redux/kanban";
import Column from "./column";
import { useDispatch } from "react-redux";

const Component = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  gap: 2vw;
  padding: 100px 50px;
  overflow-x: scroll;
`;

const CreateColumnButton = styled.button`
  width: 350px;
  height: 41px;
  border: none;
  padding: 10px;
  background-color: #064663;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

const CreateColumnInput = styled.input`
  width: 350px;
  height: 41px;
  border: none;
  padding: 10px;
  background-color: #064663;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  outline: none;
`;

export default function Board() {
  const dispatch = useDispatch();
  const [CreatingNewColumn, setCreatingNewColumn] = useState(false);
  const [ColumnInputValue, setColumnInputValue] = useState("");
  const columns = useAppSelector((state) => state.kanban.columns);

  function createColumn() {
    if (!ColumnInputValue) {
      alert("Please enter a column name");
      return;
    }
    dispatch(REDUX.createColumn(ColumnInputValue));
    setColumnInputValue("");
    setCreatingNewColumn(false);
  }

  return (
    <Component>
      {columns.length > 0 &&
        columns.map((column, index: number) => {
          return <Column column={column} index={index} key={column.id} />;
        })}
      {CreatingNewColumn ? (
        <CreateColumnInput
          value={ColumnInputValue}
          onChange={(e) => setColumnInputValue(e.target.value)}
          autoFocus={true}
          onBlur={() => onBlurHandler(ColumnInputValue, createColumn, setCreatingNewColumn)}
          placeholder="Digite o nome da coluna e pressione Enter"
          onKeyDown={(e) => KeyboardHandler(e, createColumn, setCreatingNewColumn)}
        />
      ) : (
        <CreateColumnButton onClick={() => setCreatingNewColumn(true)}>Create new Column</CreateColumnButton>
      )}
    </Component>
  );
}
