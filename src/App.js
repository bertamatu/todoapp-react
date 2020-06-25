import React from "react";
import TodoList from "./components/InputTodo";
import styled from "styled-components";

const AppContainer = styled.main`
  height: 50vh;
  width: 300px;
  background-image: linear-gradient(
    -225deg,
    #ffe29f 0%,
    #ffa99f 48%,
    #ff719a 100%
  );
  background-repeat: no-repeat;
  padding: 2rem;
  border-radius: 2rem 0 2rem 0;
  text-align: center;

  -webkit-box-shadow: 15px 17px 56px 10px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 15px 17px 56px 10px rgba(0, 0, 0, 0.22);
  box-shadow: 15px 17px 56px 10px rgba(0, 0, 0, 0.22);
`;

function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default App;
