import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import Column from "./column";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  padding: 50px;
`;

export default function Board() {
  const columns = useAppSelector((state) => state.kanban.columns);

  return (
    <Component>
      {columns.length > 0 &&
        columns.map((column, index: number) => {
          return <Column column={column} index={index} key={column.id} />;
        })}
    </Component>
  );
}
