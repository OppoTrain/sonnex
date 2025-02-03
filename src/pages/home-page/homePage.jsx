import React from "react";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../../components/slider/slider";
import NavBar from "../../components/navBar/navBar";
import "./i18n"; 

function HomePage() {
  return (
    <div id="root">
      <NavBar />
      <Slider />
    </div>
  );
}

export default HomePage;
