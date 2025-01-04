import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./proTeen.css";

import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import teenImage from "../../assets/png blue_.png"; // استيراد الصورة

function ProTeen() {
  return (
    <div id="root">
      <NavBar />
      <div className="container my-5">
        <div className="card shadow-sm p-4">
          {/* صورة المنتج */}
          <div className="text-center mb-4">
            <img
              src={teenImage}
              alt="Sonnex Teen"
              className="img-fluid product-image"
            />
          </div>
          {/* النصوص */}
          <h2 className="text-center mb-4 text-primary">Sonnex Teen</h2>
          <p className="text-justify">
            <strong>Sonnex Teens sanitary pads</strong> are specifically
            designed for younger girls during their first period and the initial
            years thereafter. These pads are smaller and narrower than most,
            making them suitable for smaller bodies while still providing
            excellent absorbency and protection.
          </p>
          <p className="text-justify">
            Sonnex Teens petite sanitary pads are highly breathable, feature a
            super soft cover for comfort against your skin, and include wings
            for additional security. They are also fragrance-free for those who
            prefer an unscented option.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProTeen;
