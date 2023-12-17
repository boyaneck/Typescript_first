import axios from "axios";

const getTodos = async (): Promise<todoListType[]> => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);
  return res.data;
};

const addTodos = async (newTodo: any) => {
  console.log("왜 이렇게 나옴?", newTodo);
  await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, newTodo);
};

const removeTodos = async (id: any) => {
  await axios.delete(`${process.env.REACT_APP_BASE_URL}/todos/${id}`);
};
const switchTodos = async (editedTodo: todoListType) => {
  await axios.patch(
    `${process.env.REACT_APP_BASE_URL}/todos/${editedTodo.id}`,
    editedTodo
  );
};
export { getTodos, addTodos, removeTodos, switchTodos };
