import React from "react";
import { Container } from "./styled";

const style = {
  width: "310px",
  backgroundColor: "#fbfbfb",
  minHeight: "100vh",
};
export const Sidebar = () => {
  return (
    <Container>
      <div style={style}>
        <h1>Sidebar</h1>
      </div>
    </Container>
  );
};

export default Sidebar;
