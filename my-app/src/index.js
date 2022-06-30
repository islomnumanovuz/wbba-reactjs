import React from "react";
import ReactDOM from "react-dom/client";
// import State from "./components/State/State";
// import Props from "./components/Props/Props";
// import Students from "./components/AdvancedState/Students";
import StudentMock from "./components/Example/StudentMock";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Props name="User 1" />
    <Props name="User 2" />
    <Props name="User 3" age={18} />
    <Props name="User 4" age={1} />
    <Props name="User 5">
      <h1>This is children props</h1>
    </Props> */}

    {/* <State /> */}

    {/* <Students /> */}

    <StudentMock />
  </React.StrictMode>
);
