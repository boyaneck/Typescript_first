import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, switchTodo } from "../redux/modules/TodolistSlice";
import * as S from "./Contentbox.style";
import { setTodos } from "../redux/modules/TodolistSlice";
import axios from "axios";
const Todos = () => {
  useEffect(() => {
    const setTodo = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/todos`
        );
        dispatch(setTodos(data));
      } catch (error) {
        console.log("값 받아오기 error", error);
      }
    };
    setTodo();
  }, []);

  const dispatch = useDispatch();
  const todos = useSelector(
    (state: { TodolistSlice: { todos: todoListType[] } }) =>
      state.TodolistSlice.todos
  );
  const handleSwitchClick = async (id: number) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/todos/${id}`
      );
      const currentIsDone = response.data.isDone;

      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/todos/${id}`,
        { isDone: !currentIsDone } // 서버에서 받아온 현재 상태의 반대 값으로 업데이트
      );
      dispatch(switchTodo(id)); // Redux 상태에서도 변경
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      try {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/todos/${id}`);
      } catch (error) {}
      dispatch(removeTodo(id));
    }
  };
  const handleCancelDoneClick = (id: number) => {
    dispatch(switchTodo(id));
  };
  return (
    <div>
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
                <S.COMPLETE_BUTTON onClick={() => handleSwitchClick(list.id)}>
                  완료
                </S.COMPLETE_BUTTON>
              </S.CONTENT>
            );
          }
        })}
      </S.CONTENT_BOX>
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
                <S.CANCEL_BUTTON onClick={() => handleSwitchClick(list.id)}>
                  취소
                </S.CANCEL_BUTTON>
              </S.CONTENT>
            );
          }
        })}
      </S.CONTENT_BOX>
    </div>
  );
};

export default Todos;
