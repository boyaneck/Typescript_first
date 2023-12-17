import React, { useEffect, useInsertionEffect } from "react";
import * as S from "./Contentbox.style";
import { useDispatch, useSelector } from "react-redux";
import { switchTodo } from "../redux/modules/TodolistSlice";
import { removeTodo } from "../redux/modules/TodolistSlice";
import axios from "axios";

const Done = () => {
  const dispatch = useDispatch();
  const todos = useSelector(
    (state: { TodolistSlice: { todos: todoListType[] } }) =>
      state.TodolistSlice.todos
  );

  const handleCancelDoneClick = (id: number) => {
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
      <h2>할일 완료 👏</h2>

      {todos.map((list) => {
        if (list.isDone) {
          return (
            <S.CONTENT key={list.id}>
              <div>{list.title}</div>
              <div>{list.content}</div>
              <S.DELETE_BUTTON onClick={() => handleDeleteClick(list.id)}>
                삭제
              </S.DELETE_BUTTON>
              <S.CANCEL_BUTTON onClick={() => handleCancelDoneClick(list.id)}>
                취소
              </S.CANCEL_BUTTON>
            </S.CONTENT>
          );
        }
      })}
    </S.CONTENT_BOX>
  );
};

export default Done;
