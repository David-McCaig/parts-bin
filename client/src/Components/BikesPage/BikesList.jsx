import React from "react";
import BikesListAll from "./BikesListAll";
// import ProductCardListAll from "./ProductCardListAll";
// import "./ProductCardList.scss"

const ProductCardList = ({ products, setproductToDisplay }) => {
  
    return (
    <>
      {products.map((product) => {
        return (
          <>
            <BikesListAll
              key={product.id}
              id={product.id}
              customerName={product.customer_name}
              itemName={product.item_name}
              price={product.price}
              image={product.image_path}
              // description={product.description}
              setproductToDisplay={setproductToDisplay}
              // products={products}
            />  
          </>
        );
      })}
    </>
  );
};

export default ProductCardList;