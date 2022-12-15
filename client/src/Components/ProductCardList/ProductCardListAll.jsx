// import { useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCardList.scss"

const ProductCardListAll = ({
  id,
  itemName,
  price,
  image,
}) => {


  return (
    <>
      <section className="product-card">
        <Link to={`/product/${id}`}>
          <img className="product-card__image" alt={'Mosaic bike for sale'} src={image}></img>
        </Link>
        <p className="product-card__price">{price}</p>
        <p className="product-card__title">{itemName}</p>
        <p className="product-card__location">Toronto,On</p>
      </section>

    </>
  );
}

export default ProductCardListAll;