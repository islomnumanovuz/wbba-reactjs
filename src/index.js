import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { State } from "./State";
// import { Student } from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Student/> */}
    <State/>
  </React.StrictMode>
);
