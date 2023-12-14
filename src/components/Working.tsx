import React from "react";
import type { todoListType } from "../types/todoListType";
import * as S from "./Contentbox.style";
interface Workingprops {
  todoList: todoListType[];
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoList: React.Dispatch<React.SetStateAction<todoListType[]>>;
}

const Working: React.FC<Workingprops> = ({
  todoList,
  setIsDone,
  setTodoList,
}) => {
  const handleDoneClick = (id: number) => {
    console.log("아이디", id);
    const updateTodoList = todoList.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          isDone: true,
        };
      }
      return list;
    });
    setTodoList(updateTodoList);
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
      <h2>오늘의 할일 🔥</h2>
      {todoList.map((list) => {
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
