import { createSlice } from "@reduxjs/toolkit";
import { SaveOnLocal } from "../../utils";
export type CardTypes = {
  id: string;
  title: string;
  description: string;
};
export type ColumnTypes = {
  id: string;
  title: string;
  cards: CardTypes[];
};

export type KanbanTypes = {
  columns: ColumnTypes[];
};
const initialState: KanbanTypes = {
  columns: [
    {
      id: "1",
      title: "Backlog",
      cards: [
        {
          id: "1",
          title: "Create a Kanban app",
          description: "Create a Kanban app using React and Redux",
        },
      ],
    },
    {
      id: "2",
      title: "To Do",
      cards: [
        {
          id: "1",
          title: "Create a Kanban app",
          description: "Create a Kanban app using React and Redux",
        },
      ],
    },
    {
      id: "3",
      title: "Doing",
      cards: [
        {
          id: "1",
          title: "Create a Kanban app",
          description: "Create a Kanban app using React and Redux",
        },
      ],
    },
  ],
};

const KanbanReducer = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    updateKanban(state, action) {
      state.columns = action.payload;
    },
    createCard(state, action) {
      const { columnId, cardtitle } = action.payload;
      const newCard = {
        id: `Card ${Math.random()}`,
        title: cardtitle,
        description: "",
      };
      state.columns[columnId].cards.push(newCard);
      SaveOnLocal("kanban", state);
    },
  },
});

export const { updateKanban, createCard } = KanbanReducer.actions;

export default KanbanReducer.reducer;
