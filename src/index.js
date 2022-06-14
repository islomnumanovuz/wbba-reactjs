import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import "./index.css";
// import App from "./App";
import home1 from "./assets/images/home-image-1.jpg"
import home2 from "./assets/images/home-image-2.jpg"
import home3 from "./assets/images/home-image-3.jpg"

const data = [
  {id: 1, title: "New Apartment Nice Wiew", description: "Quincy St, Brooklyn, NY, USA", price: 75.000, img: home1},
  {id: 2, title: "Old Apartment Bad Wiew", description: "Beshiktash St, Istanbul, Turkey", price: 5.000, img: home2},
  {id: 3, title: "Best Apartment Best Wiew", description: "Navro'z St, Andizhan, Uzbekistan", price: 8.0000, img: home3},
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home data={data}/>
  </React.StrictMode>
);
