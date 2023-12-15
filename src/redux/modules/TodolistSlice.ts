import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodoListSliceState {
  todos: todoListType[];
}

const initialState: TodoListSliceState = {
  todos: [
    {
      id: 0,
      title: "꾸준히 몰입",
      content: "비교는 어제의 나 ",
      isDone: false,
    },
    {
      id: 1,
      title: "기필코 간다 판교",
      content: "열심히도 좋지만, 좋은 방법과 패턴을 알아차리는 분별력",
      isDone: false,
    },
  ],
};
const TodolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoListType>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((list) => list.id !== action.payload);
    },

    switchTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((list) => {
        if (list.id === action.payload) {
          return {
            ...list,
            isDone: !list.isDone,
          };
        }
        return list;
      });
    },
  },
});

export default TodolistSlice.reducer;
export const { addTodo, removeTodo, switchTodo } = TodolistSlice.actions;
