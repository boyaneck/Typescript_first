import React, { SetStateAction } from "react";
import { todoListType } from "../types/todoListType";
import * as S from "./Contentbox.style";
interface InputProps {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<SetStateAction<string>>;
  setTodoList: React.Dispatch<SetStateAction<todoListType[]>>;
  todoList: todoListType[];
}
const Input: React.FC<InputProps> = ({
  title,
  setTitle,
  content,
  setContent,
  setTodoList,
  todoList,
}) => {
  const handleTodoListAddClick = () => {
    if (!title || !content) {
      return alert("제목과 내용을 모두 기입해주세요!");
    }
    const newTodoList = {
      id: todoList.length,
      title,
      content,
      isDone: false,
    };

    setTodoList([...todoList, newTodoList]);
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
