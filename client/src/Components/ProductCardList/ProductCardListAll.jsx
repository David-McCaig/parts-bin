// import { useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import bike from "../../assets/images/Mountain bike.jpeg"
import "./ProductCardList.scss"

const ProductCardListAll = ({
  customerName,
  itemName,
  price,
  // description,
}) => {

  
  return (
<>
<section className="product-card">
  <img className="product-card__image" src={bike}></img>
  <p className="product-card__price">{price}</p>
  <p className="product-card__title">{itemName}</p>
  <p className="product-card__location">Toronto,On</p>
</section>
</>
  );
}

export default ProductCardListAll;