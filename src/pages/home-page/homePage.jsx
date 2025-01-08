import React from "react";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../../components/slider/slider";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import Products from "../products/products";
function HomePage() {
  return (
    <div id="root">
      <NavBar />
      <Slider />
      <Products />
    </div>
  );
}

export default HomePage;
