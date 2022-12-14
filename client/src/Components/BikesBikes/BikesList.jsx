import React from "react";
import BikesListAll from "./BikesListAll";

const BikesList = ({ products, setproductToDisplay }) => {

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
              setproductToDisplay={setproductToDisplay}
            />
          </>
        );
      })}
    </>
  );
};

export default BikesList;