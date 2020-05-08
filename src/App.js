import React from "react";
//import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import "./styles/Tittle.css";
import DataArea from "../src/components/DataArea";
//import Header from "./components/Header"; delete heater file

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
