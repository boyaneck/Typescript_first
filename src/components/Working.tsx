import React from "react";
import * as S from "./Contentbox.style";
import { useDispatch, useSelector } from "react-redux";
import { switchTodo } from "../redux/modules/TodolistSlice";
import { removeTodo } from "../redux/modules/TodolistSlice";

const Working = () => {
  const dispatch = useDispatch();
  const todos = useSelector(
    (state: { TodolistSlice: { todos: todoListType[] } }) =>
      state.TodolistSlice.todos
  );
  const handleDoneClick = (id: number) => {
    dispatch(switchTodo(id));
  };

  const handleDeleteClick = (id: number) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      dispatch(removeTodo(id));
    }
  };

  return (
    <S.CONTENT_BOX>
      <h2>오늘의 할일 🔥</h2>
      {todos.map((list) => {
        if (!list.isDone) {
          return (
            <S.CONTENT key={list.id}>
              <div>{list.title}</div>
              <div>{list.content}</div>
              <S.DELETE_BUTTON
                onClickCapture={() => handleDeleteClick(list.id)}
              >
                삭제
              </S.DELETE_BUTTON>
              <S.COMPLETE_BUTTON onClick={() => handleDoneClick(list.id)}>
                완료
              </S.COMPLETE_BUTTON>
            </S.CONTENT>
          );
        }
      })}
    </S.CONTENT_BOX>
  );
};
export default Working;
