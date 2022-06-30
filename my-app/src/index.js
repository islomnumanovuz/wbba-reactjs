import React from "react";
import ReactDOM from "react-dom/client";
import Props from "./components/Props/Props";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Props name="User 1" />
    <Props name="User 2" />
    <Props name="User 3" />
    <Props name="User 4" />
    <Props name="User 5">
      <h1>This is children props</h1>
    </Props>
  </React.StrictMode>
);
