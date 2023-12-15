import React, { SetStateAction } from "react";
import * as S from "./Contentbox.style";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/TodolistSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const Input = () => {
  const [content, setContent] = useState<string>(""); //초기값이 ''으로 undefined 을 방지
  const [title, setTitle] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);
  const dispatch = useDispatch();
  const todos = useSelector(
    (state: { TodolistSlice: { todos: todoListType[] } }) =>
      state.TodolistSlice.todos
  );
  const handleTodoListAddClick = () => {
    if (!title || !content) {
      return alert("제목과 내용을 모두 기입해주세요!");
    }
    const newTodoList = {
      id: todos.length,
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodoList));
    setTitle("");
    setContent("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
    } else {
      setContent(value);
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>세련되고,분별력 있는 크리에이터</h1>
      </div>
      <S.INPUT_BOX>
        <S.INPUT
          placeholder="제목을 정해주세요"
          name="title"
          value={title}
          onChange={handleOnChange}
          required
        />
        <S.INPUT
          placeholder="내용을 정해주세요"
          name="content"
          value={content}
          onChange={handleOnChange}
          required
        />
        <S.BUTTON onClick={() => handleTodoListAddClick()}>등록하기</S.BUTTON>
      </S.INPUT_BOX>
    </>
  );
};

export default Input;
