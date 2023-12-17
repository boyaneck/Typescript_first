import React, { useState } from "react";
import * as S from "./Contentbox.style";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/TodolistSlice";
import axios from "axios";

const Input = () => {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleTodoListAddClick = async () => {
    if (!title || !content) {
      return alert("제목과 내용을 모두 기입해주세요!");
    }

    const newTodoList = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/todos`,
        newTodoList
      );

      dispatch(addTodo(response.data)); // 새로운 todo를 상태에 추가
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("값 받아오기 error", error);
    }
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
        <h1>세련되고, 분별력 있는 크리에이터</h1>
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
