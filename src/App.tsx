import React, { useState } from "react";
import Input from "./components/Input";
import type { todoListType } from "./types/todoListType";
import Working from "./components/Working";
import Done from "./components/Done";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const [todoList, setTodoList] = useState<todoListType[]>([
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
  ]);
  const [content, setContent] = useState<string>(""); //초기값이 ''이기에 굳이 타입선언을 안해도 되지만, 연습이라 중복으로 기입
  const [title, setTitle] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);
  return (
    <Layout>
      <Input
        content={content}
        title={title}
        setTitle={setTitle}
        setContent={setContent}
        todoList={todoList}
        setTodoList={setTodoList}
      />

      <Working
        todoList={todoList}
        setIsDone={setIsDone}
        setTodoList={setTodoList}
      />

      <Done todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
};

export default App;
