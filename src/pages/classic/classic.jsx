import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./classic.css";

import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import classicImage from "../../assets/png blue_.png"; // استيراد الصورة

function Classic() {
  return (
    <div id="root">
      <NavBar />
      <div className="container my-5">
        <div className="card shadow-sm p-4">
          {/* صورة المنتج */}
          <div className="text-center mb-4">
            <img
              src={classicImage}
              alt="Sonnex Classic"
              className="img-fluid product-image"
            />
          </div>
          {/* النصوص */}
          <h2 className="text-center mb-4 text-primary">Sonnex Classic</h2>
          <p className="text-justify">
            <strong>Classic Sonnex sanitary pads</strong> - the ones you've
            known for years. Now in new packaging! Many women who value comfort
            and safety choose Sonnex sanitary pads with traditional thickness.
          </p>
          <p className="text-justify">
            You'll find this line's sanitary pads available in variants with and
            without wings.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Classic;
