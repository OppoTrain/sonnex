import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mom.css";

import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import momImage from "../../assets/pink2.jpg"; // استيراد الصورة

function Mom() {
  return (
    <div id="root">
      <NavBar />
      <div className="container my-5">
        <div className="card shadow-sm p-4">
          {/* صورة المنتج */}
          <div className="text-center mb-4">
            <img
              src={momImage}
              alt="Sonnex Mom"
              className="img-fluid product-image"
            />
          </div>
          {/* النصوص */}
          <h2 className="text-center mb-4 text-primary">Sonnex Mom</h2>
          <p className="text-justify">
            <strong>At Sonnex Mom</strong>, we empower women to manage their
            hygiene with confidence. Our specialized postpartum hygienic pads
            and Sonnex Mom mesh panties offer exceptional protection and comfort
            to aid recovery after delivery.
          </p>
          <p className="text-justify">
            For breastfeeding mothers, our soft, absorbent nursing pads provide
            reliability and comfort. Discover our Sonnex Mom Comfort product
            line for even more absorbent hygienic underpads and nursing pads,
            designed to meet the unique needs of motherhood. Trust Sonnex Mom to
            keep you feeling fresh and cared for!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mom;
