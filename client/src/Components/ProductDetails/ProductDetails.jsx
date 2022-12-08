import './ProductDetails.scss'
import React from 'react';


function ProductDetails({ product, customer }) {
    console.log(customer)
    // const itemName = product.item_name;
    // const description = product.description;
    // const price = product.price;
    // const customerName = customer.customer_name;
    // const email = customer.email;
    
    return (
        <>
        <p>{product.item_name}</p>
        <p>{customer.email}</p>
     <p>This is the product details page</p>
        </>

    );
}

export default ProductDetails;