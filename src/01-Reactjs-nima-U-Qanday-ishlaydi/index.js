import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Class } from "./Class";
const exampleJSX = <h1>Hello React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}{" "}
    <div>
      {exampleJSX}
      <App />
      <Class />
    </div>
  </React.StrictMode>
);
