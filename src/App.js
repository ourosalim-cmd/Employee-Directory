import React from "react";
import Wrapper from "./components/Wrapper";
import DataArea from "../src/components/DataArea";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
      <div className="tittle">
        <h1>Employee Directory</h1>
      </div>
        <DataArea />
      </Wrapper>
    </div>
  );
}

export default App;
