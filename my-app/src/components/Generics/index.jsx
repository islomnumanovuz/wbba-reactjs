import React from "react";
import { Container } from "./styled";
import { useLocation } from "react-router-dom";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>Root {location?.pathname}</h1>
    </Container>
  );
};
export default Generics;
