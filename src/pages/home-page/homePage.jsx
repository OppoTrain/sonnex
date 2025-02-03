import React from "react";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../../components/slider/slider";
import NavBar from "../../components/navBar/navBar";
import All from "../pages/all";

function HomePage() {
  return (
    <div id="root">
      <NavBar />
      <Slider />
      <All />
    </div>
  );
}

export default HomePage;
