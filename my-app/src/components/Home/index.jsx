import React from "react";
import { Article, Container } from "./styled";
import Flower from "../../assets/images/big-flower.jpg";
import Sidebar from "../Sidebar";
import Products from "../Products/index";

export const Home = () => {
  return (
    <Container>
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fbfbfb",
          marginTop: "12px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <main className="left">
          <p className="main-subtitle">Welcome to GreenShop</p>
          <h1 className="main-title">
            Let's Make a Better <span>Planet</span>
          </h1>
          <p className="main-description">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button className="btn main-btn">SHOP NOW</button>
        </main>
        <main className="right">
          <img src={Flower} alt="flower" />
        </main>
      </main>

      <section style={{ marginTop: "45px" }}>
        <Article>
          <Sidebar />
          <Products />
        </Article>
      </section>
    </Container>
  );
};

export default Home;
