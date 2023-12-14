import styled from "styled-components";

export const CONTENT_BOX = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10vh;
`;
export const CONTENT = styled.div`
  border: 1px solid #ccc;
  padding: 30px;
  margin-right: 30%;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease; /* 변화를 부드럽게 만들기 위한 transition 속성 */
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* hover 시 변경될 그림자 스타일 */
  }
`;

// ----------------INPUT------------------
export const INPUT_BOX = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
export const INPUT = styled.input`
  margin-right: 20px;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  &:hover {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

// ----------------INPUT------------------

// ------------------BUTTON -------------------
export const BUTTON = styled.button`
  padding: 8px;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  transition: all 0.4s linear;
  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
export const DELETE_BUTTON = styled.button`
  padding: 6px;
  width: 8vh;
  border-radius: 6px;
  font-weight: bold;
  border: 1px solid red;
  background-color: white;
  color: red;
  transition: all 0.4s linear;
  margin-top: 15px;
  margin-right: 8px;
  &:hover {
    background-color: red;
    border: 1px solid white;
    color: white;
    cursor: pointer;
  }
`;
export const COMPLETE_BUTTON = styled.button`
  padding: 6px;
  width: 8vh;
  border-radius: 6px;
  font-weight: bold;
  border: 1px solid green;
  background-color: white;
  color: green;
  transition: all 0.4s linear;
  margin-top: 15px;
  &:hover {
    background-color: green;
    border: 1px solid white;
    color: white;
    cursor: pointer;
  }
`;
export const CANCEL_BUTTON = styled.button`
  padding: 6px;
  width: 8vh;
  border-radius: 6px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: white;
  color: blue;
  transition: all 0.4s linear;
  margin-top: 15px;
  &:hover {
    background-color: blue;
    border: 1px solid blue;
    color: white;
    cursor: pointer;
  }
`;

// ------------------BUTTON -------------------
