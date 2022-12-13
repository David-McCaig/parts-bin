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

export default ComponentsList;