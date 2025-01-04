import React from "react";
import { useNavigate } from "react-router-dom";
import "./tips.css";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
function Tips() {
  const navigate = useNavigate();

  return (
    <div className="tips-container">
      <NavBar />

      <div className="tips-row">
        {/* Teenagers Section */}
        <div className="tips-section" onClick={() => navigate("/teenager")}>
          <div className="tips-overlay light-gray">
            <div className="tips-content">
              <h1 className="tips-title">Tips for</h1>
              <h2 className="tips-subtitle">Teenagers</h2>
              <button className="tips-button light-gray">Learn More</button>
            </div>
          </div>
        </div>

        {/* For All of Us Section */}
        <div
          className="tips-section"
          onClick={() => navigate("/for-all-of-us")}
        >
          <div className="tips-overlay light-blue">
            <div className="tips-content">
              <h1 className="tips-title">Tips for</h1>
              <h2 className="tips-subtitle">All of Us</h2>
              <button className="tips-button light-blue">Learn More</button>
            </div>
          </div>
        </div>

        {/* Menopause Section */}
        <div className="tips-section" onClick={() => navigate("/menopause")}>
          <div className="tips-overlay light-pink">
            <div className="tips-content">
              <h1 className="tips-title">Tips in</h1>
              <h2 className="tips-subtitle">Menopause</h2>
              <button className="tips-button light-pink">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tips;
