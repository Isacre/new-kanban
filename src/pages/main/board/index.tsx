import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import Column from "./column";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  padding: 50px;
`;

const CreateColumn = styled.button`
  width: 272px;
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

export default function Board() {
  const [CreatingNewColumn, setCreatingNewColumn] = useState(false);
  const columns = useAppSelector((state) => state.kanban.columns);

  return (
    <Component>
      {columns.length > 0 &&
        columns.map((column, index: number) => {
          return <Column column={column} index={index} key={column.id} />;
        })}
      <CreateColumn>Create new Column</CreateColumn>
    </Component>
  );
}
