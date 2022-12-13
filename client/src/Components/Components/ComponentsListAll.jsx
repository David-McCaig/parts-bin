import React from "react";
import { NavLink, Link} from "react-router-dom";
import bike from "../../assets/images/Mosaic-x-TPC-GT-2-45-Review-4.jpg"
// import "../Produ"

const ComponentsListAll = ({
  id,
  customerName,
  itemName,
  price,
  image,
  // description,
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

export default ComponentsListAll;