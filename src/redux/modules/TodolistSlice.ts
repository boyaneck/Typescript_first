import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TodoListSliceState {
  todos: todoListType[];
  id?: string;
}

let todos: todoListType[] = [];

const initialState: TodoListSliceState = {
  todos,
};
const TodolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<todoListType[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<todoListType>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((list) => list.id !== action.payload);
    },

    switchTodo: (state, action: PayloadAction<number>) => {
      console.log("zzzz", action.payload);
      const updatedTodos = state.todos.map((list) => {
        if (list.id === action.payload) {
          return {
            ...list,
            isDone: !list.isDone,
          };
        }
        return list;
      });
      state.todos = updatedTodos;
    },
  },
});

export default TodolistSlice.reducer;
export const { addTodo, removeTodo, switchTodo, setTodos } =
  TodolistSlice.actions;
