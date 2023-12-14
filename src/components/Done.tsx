import React from "react";
import type { todoListType } from "../types/todoListType";
import * as S from "./Contentbox.style";
interface DoneProps {
  todoList: todoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<todoListType[]>>;
}

const Done: React.FC<DoneProps> = ({ todoList, setTodoList }) => {
  const handleCancelDoneClick = (id: number) => {
    const cancelList = todoList.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          isDone: false,
        };
      }
      return list;
    });
    setTodoList(cancelList);
  };
  const handleDeleteClick = (id: number) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      let deleteList = todoList.filter((list) => list.id !== id);
      setTodoList(deleteList);
    }
  };
  return (
    <S.CONTENT_BOX>
      <h2>할일 완료 👏</h2>

      {todoList.map((list) => {
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
