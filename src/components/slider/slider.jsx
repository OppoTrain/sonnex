import React from "react";
import bella1 from "../../assets/pink2.jpg"; 
import { useTranslation } from 'react-i18next';
import "./slider.css";

export default function Slider() {
  const { t } = useTranslation();

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel" /* تفعيل التمرير التلقائي */
      data-bs-interval="3000" /* تغيير الصورة كل 3 ثوانٍ */
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bella1} className="d-block w-100" alt="Pastel Blue Image" />

          <h3 className="carousel-caption">{t("slider.caption1")}</h3>
        </div>

        <div className="carousel-item">
          <img src={bella1} className="d-block w-100" alt="Pastel Blue Image" />

          <h3 className="carousel-caption">{t("slider.caption2")}</h3>
        </div>
      </div>

      {/* إضافة مؤشرات للتنقل بين الصور */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
