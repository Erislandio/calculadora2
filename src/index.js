import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/main/Calculator";

import "./styles.css";

const App = () => {
  return (
    <div>
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
