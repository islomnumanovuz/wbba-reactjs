import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "./styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navbar } from "../util/index";

export const Root = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            {navbar.map(({ path, id, Element }) => {
              return <Route key={id} path={path} element={<Element />} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
