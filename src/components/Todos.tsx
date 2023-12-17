import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, switchTodo } from "../redux/modules/TodolistSlice";
import * as S from "./Contentbox.style";
import { setTodos } from "../redux/modules/TodolistSlice";
import axios from "axios";
import { getTodos, removeTodos, switchTodos } from "../api/todos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const Todos = () => {
  const { isError, isLoading, data } = useQuery<todoListType[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  const queryClient = useQueryClient();
  const removeMutation = useMutation({
    mutationFn: removeTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const switchMutation = useMutation({
    mutationFn: switchTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSwitchClick = async (id: number) => {
    switchMutation.mutate(switchTodos(id));
  };

  const handleDeleteClick = async (id: number) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      try {
        // await axios.delete(`${process.env.REACT_APP_BASE_URL}/todos/${id}`);
        removeMutation.mutate(removeTodos(id));
      } catch (error) {}
    }
  };
  if (isError) <div>서버와의 통신에서 오류가 발생했습니다.</div>;
  if (isLoading) <div>로딩중입니다 잠시만 기다려주세요</div>;

  return (
    <div>
      <S.CONTENT_BOX>
        <h2>오늘의 할일 🔥</h2>
        {data &&
          data.map((list) => {
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

        {data &&
          data.map((list) => {
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
