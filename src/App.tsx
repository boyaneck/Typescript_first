import Input from "./components/Input";
import styled from "styled-components";
import Todos from "./components/Todos";
const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Layout>
      <Input />
      <Todos />
    </Layout>
  );
};

export default App;
