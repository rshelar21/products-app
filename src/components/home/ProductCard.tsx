import React from "react";
import "../../Styles/ProductCard.css"
const ProductCard = () => {
  return (
    <>
      <div className="product_card">
        <img src="/assets/bg-cover.jpg" alt="cloth-img" />
        <p className="product_title">Name</p>
      </div>
    </>
  );
};

export default ProductCard;
