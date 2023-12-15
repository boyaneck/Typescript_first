import Input from "./components/Input";
import Working from "./components/Working";
import Done from "./components/Done";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Layout>
      <Input />
      <Working />
      <Done />
    </Layout>
  );
};

export default App;
