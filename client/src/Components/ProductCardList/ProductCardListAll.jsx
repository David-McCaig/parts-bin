// import { useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import { NavLink, Link} from "react-router-dom";
import bike from "../../assets/images/Mosaic-x-TPC-GT-2-45-Review-4.jpg"
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
<section className="product-card">
<Link to={`/product/${id}`}>
 <img className="product-card__image" alt={'Mosaic bike for sale'} src={bike}></img>
  </Link>
  <p className="product-card__price">{price}</p>
  <p className="product-card__title">{itemName}</p>
  <p className="product-card__location">Toronto,On</p>
</section>

</>
  );
}

export default ProductCardListAll;