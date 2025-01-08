import React, { useState } from "react";
import Products from "../products/products";
import Contact from "../contact/contact";
import Tips from "../tips/tips";
import "./productsPage.css";
import NavBar from "../../components/navBar/navBar";

function TabsPage() {
  const [activeTab, setActiveTab] = useState("products"); // حالة التاب النشط

  return (
    <div className="tabs-page">
      {/* شريط التنقل */}
      <NavBar />

      {/* جملة قبل التبويبات */}
      <div className="before-content">
        <p>Please select a tab to view its content below.</p>
      </div>

      {/* التبويبات */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === "products" ? "active" : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
        <button
          className={`tab-button ${activeTab === "tips" ? "active" : ""}`}
          onClick={() => setActiveTab("tips")}
        >
          Tips
        </button>
      </div>

      {/* المحتوى الخاص بالتبويب النشط */}
      <div className="tab-content">
        {activeTab === "products" && <Products />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "tips" && <Tips />}
      </div>
    </div>
  );
}

export default TabsPage;
