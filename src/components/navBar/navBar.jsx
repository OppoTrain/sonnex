import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/logo.png";
import "./navBar.css";
import { useTranslation } from 'react-i18next';
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

//import { Link } from "react-router-dom";
import englishFlag from "../../assets/en.png";
import arabicFlag from "../../assets/pl.png";

function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // دالة لإعادة التوجيه عند النقر على اللوجو
  const handleLogoClick = () => {
    navigate("/"); // سيتم التوجيه إلى الصفحة الرئيسية
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="icon">
              <FontAwesomeIcon icon={faGlobe} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                <img src={englishFlag} alt="English" className="flag-icon" />
                English
              </Dropdown.Item>

              <Dropdown.Item onClick={() => changeLanguage("ar")}>
                <img src={arabicFlag} alt="Arabic" className="flag-icon" />
                Arabic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="logo-container" onClick={handleLogoClick}>
            <img src={img} alt="Logo" className="logo" />
          </div>

          <div className="spacer"></div>

          <button className="button">{t("product")}</button>

          <div className="spacer"></div>

          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
