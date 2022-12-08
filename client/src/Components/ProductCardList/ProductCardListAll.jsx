// import { useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import { NavLink, Link} from "react-router-dom";
import bike from "../../assets/images/Mountain bike.jpeg"
import "./ProductCardList.scss"

const ProductCardListAll = ({
  id,
  customerName,
  itemName,
  price,
  // description,
}) => {

  
  return (
<>
<Link to={`/product/${id}`}>
<section className="product-card">
  <img className="product-card__image" src={bike}></img>
  <p className="product-card__price">{price}</p>
  <p className="product-card__title">{itemName}</p>
  <p className="product-card__location">Toronto,On</p>
</section>
</Link>
</>
  );
}

export default ProductCardListAll;