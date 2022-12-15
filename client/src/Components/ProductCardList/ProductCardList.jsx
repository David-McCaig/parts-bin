import React from "react";
import ProductCardListAll from "./ProductCardListAll";
import "./ProductCardList.scss"

const ProductCardList = ({ products, setproductToDisplay }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <ProductCardListAll
              key={product.id}
              id={product.id}
              customerName={product.customer_name}
              itemName={product.item_name}
              price={product.price}
              image={product.image_path}
              setproductToDisplay={setproductToDisplay}
            />
          </>
        );
      })}
    </>
  );
};

export default ProductCardList;