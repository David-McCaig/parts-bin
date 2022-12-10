import './ProductDetails.scss'
import React from 'react';
import bike from '../../assets/images/Mosaic-x-TPC-GT-2-45-Review-4.jpg'
import { useState } from "react";

function ProductDetails({ product, customer }) {
    console.log(customer)
    // const itemName = product.item_name;
    // const description = product.description;
    // const price = product.price;
    // const customerName = customer.customer_name;
    // const email = customer.email;
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
    }

    return (
        <section>
            <div>
                <img className="product-card__image" alt={'Mosaic bike for sale'} src={bike}></img>
            </div>

            <div>
                <h2>{product.item_name}</h2>
                <p>Toronto</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <div>
                <form onSubmit={handleSubmit}>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <input type="submit" />
                </form>
                </div>
            </div>
        </section>

    );
}

export default ProductDetails;