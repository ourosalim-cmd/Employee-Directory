import React from "react";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Wrapper>
      <div className="tittle">
        <h1>Employee Directory</h1>
      </div>
        <Employees />
      </Wrapper>
    </div>
  );
}

export default App;
