import React from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import img from "../../assets/png blue_.png";
import Footer from "../../components/footer/footer";

function Products() {
  const navigate = useNavigate();

  // بيانات المنتجات
  const products = [
    {
      name: "Sonnex Ultra-thin",
      image: img,
      path: "/ultra-thin",
    },
    {
      name: "Sonnex Teen",
      image: img,
      path: "/pro-teen",
    },
    {
      name: "Sonnex Classic",
      image: img,
      path: "/classic",
    },
    {
      name: "Sonnex Mom",
      image: img,
      path: "/mom",
    },
    {
      name: "Sonnex Becontrol",
      image: img,
      path: "/becontrol",
    },
  ];

  return (
    <div className="page-container">
      <div className="products-container">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => navigate(product.path)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
