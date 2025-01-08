import React from "react";
import "./aboutUs.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/navBar/navBar";
import aboutUsImage from "../../assets/logo.png"; // استيراد الصورة

const AboutUs = () => {
  return (
    <div id="about-us-page">
      <Nav />
      <div className="about-us-container">
        {/* رأس الصفحة مع الصورة */}
        <div className="about-us-header">
          <div className="about-us-image-container">
            <img
              src={aboutUsImage}
              alt="About Sonnex"
              className="about-us-image"
            />
          </div>
          <div className="about-us-text">
            <h1>About Sonnex</h1>
            <p className="about-us-tagline">
              Your trusted partner in personal hygiene and medical products
              since 2001.
            </p>
          </div>
        </div>

        {/* محتوى الصفحة */}
        <div className="about-us-content">
          <p>
            <strong>Sonnex</strong> is a UK-based company established in 2001,
            specializing in the development and manufacturing of high-quality
            personal hygiene and medical products.
          </p>
          <p>
            Renowned for its brands <strong>Sannex</strong>,{" "}
            <strong>Kidssi</strong>, and <strong>Becontrol</strong>, Sonnex
            offers a comprehensive range of sanitary napkins, diapers, and other
            absorbent products designed to meet the highest standards of
            comfort, safety, and performance.
          </p>
          <p>
            Over the years, Sonnex has earned a reputation for delivering
            reliable and innovative products. Our commitment to quality and
            customer satisfaction has made us a trusted name in personal
            hygiene, both in the UK and internationally.
          </p>
          <p>
            Whether you're looking for sanitary pads, baby diapers, or
            incontinence products, Sonnex has the solution that suits your
            needs. We continuously strive to improve our products to offer
            comfort and reliability to every user.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
