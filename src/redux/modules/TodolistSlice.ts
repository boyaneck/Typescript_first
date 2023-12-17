import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface TodoListSliceState {
  todos: todoListType[];
  id?: string;
}

let todos: todoListType[] = [];
const initial = async (): Promise<todoListType[]> => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);
    console.log("data", data);
    return data;
  } catch (error) {
    return [];
  }
};
initial().then((data) => {
  todos = data;
});
const initialState: TodoListSliceState = {
  todos,
};
const TodolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoListType>) => {
      console.log("왜 안들어가?", action.payload);
      const fetchData = async () => {
        try {
          await axios.post(
            `${process.env.REACT_APP_BASE_URL}/todos`,
            action.payload
          );
        } catch (error) {
          console.log("json-server에 값이 들어가지 않았습니다", error);
        }
      };
      fetchData();
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const deleteData = async () => {
        console.log("aaaa", action.payload);
        try {
          await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/todos/${action.payload + 1}`
          );
        } catch (error) {
          console.log(
            "json-server에 해당 id와 일치하는 게시글이 삭제되지 않았습니다."
          );
        }
      };
      deleteData();
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
      //action.payload의 id값 신경쓸것
      state.todos = updatedTodos;
      const switchData = async () => {
        await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/todos/${action.payload + 1}}`,
          { isDone: true }
        );
        switchData();
      };
    },
  },
});

export default TodolistSlice.reducer;
export const { addTodo, removeTodo, switchTodo } = TodolistSlice.actions;
