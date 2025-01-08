import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ultraThin.css";

import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import becontrolImage from "../../assets/pink2.jpg"; // استيراد الصورة

function Becontrol() {
  return (
    <div id="root">
      <NavBar />
      <div className="container my-5">
        <div className="card shadow-sm p-4">
          {/* صورة المنتج */}
          <div className="text-center mb-4">
            <img
              src={becontrolImage}
              alt="Sonnex Becontrol"
              className="img-fluid product-image"
            />
          </div>
          {/* النصوص */}
          <h2 className="text-center mb-4 text-primary">Sonnex Ultra thin </h2>
          <p className="text-justify">
            Ultra-thin Sonnex sanitary pads deliver effective protection and
            remain unnoticeable even under the tightest clothing. The entire
            range of Sonnex ultra- thin pads includes options suitable for every
            skin type, including the most sensitive and allergy-prone.
            Experience the quality for yourself Sonnex teen
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Becontrol;
