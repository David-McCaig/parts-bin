import React from "react";
import ComponentsListAll from "./ComponentsListAll";


const ComponentsList = ({ products, setproductToDisplay }) => {

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <ComponentsListAll
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

export default ComponentsList;