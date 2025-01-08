import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./becontrol.css";

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
          <h2 className="text-center mb-4 text-primary">Sonnex Becontrol</h2>
          <p className="text-justify">
            Incontinence does not have to mean giving up an active lifestyle.{" "}
            <strong>Sonnex Becontrol</strong> are used instead of underwear.
            They protect against moderate to severe incontinence.
          </p>
          <p className="text-justify">
            Control pants prevent leaks and are very gentle on the skin. Sonnex
            Becontrol has been designed to provide optimum protection and full
            discretion.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Becontrol;
