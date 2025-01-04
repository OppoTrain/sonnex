import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./footer.css";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // تفعيل التنقل
  const isArabic = i18n.language === "ar";

  // دالة مساعدة لضمان أن البيانات مصفوفة
  const getTranslationList = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  // دوال التوجيه
  const handleNavigation = (item) => {
    switch (item) {
      case "Contact":
      case "اتصل بنا":
        navigate("/contact");
        break;
      case "Who is sonnix ?":
      case "من هم سونيكس ؟":
        navigate("/about-us");
        break;
      case "Sonnex Ultra-thin":
      case "سونكس ألترا ثين":
        navigate("/ultra-thin");
        break;
      case "Sonnex teen":
      case "سونكس تين":
        navigate("/pro-teen");
        break;
      case "Sonnex Classic":
      case "سونكس كلاسيك":
        navigate("/classic");
        break;
      case "Sonnex Mom":
      case "سونكس موم":
        navigate("/mom");
        break;
      case "Sonnex Becontrol":
      case "سونكس بيكنترول":
        navigate("/becontrol");
        break;
      default:
        break;
    }
  };

  return (
    <footer className="footer" dir={isArabic ? "rtl" : "ltr"}>
      <div className="footer-content">
        {/* قسم المنتجات */}
        <div className="footer-section">
          <h4>{t("footer.ourProducts")}</h4>
          <ul>
            {getTranslationList("footer.productsList").map((product, index) => (
              <li
                key={index}
                onClick={() => handleNavigation(product)}
                style={{
                  cursor: "pointer",
                }}
              >
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* قسم About Us */}
        <div className="footer-section">
          <h4>{t("footer.aboutUs")}</h4>
          <ul>
            {getTranslationList("footer.aboutUsList").map((about, index) => (
              <li
                key={index}
                onClick={() => handleNavigation(about)}
                style={{
                  cursor: "pointer",
                }}
              >
                {about}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
