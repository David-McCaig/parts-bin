import './ProductDetails.scss'
import React from 'react';
import bike from '../../assets/images/Mosaic-x-TPC-GT-2-45-Review-4.jpg'
import { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { MdDescription } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { GrContact } from "react-icons/gr";


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
        <section className='product'>
            
                <img className="product-details__image" alt={'Mosaic bike for sale'} src={bike}></img>
            

            <div className='product-details'>
                <div >
                <h2 className='product-details__title'>{product.item_name} </h2>
                <div className='product-details__container'>
                    <ImLocation2 className="product-details__logo" />
                    <p className='product-details__location'>  Toronto </p>
                </div>
                <div className='product-details__container'>
                    <ImPriceTags className="product-details__logo" />
                    <p className='product-details__price'>{product.price}</p>
                </div>

                <div className='product-details__container-description'>
                <MdDescription className="product-details__logo-description" />
                <p className='product-details__description'>{product.description}</p>
                </div>
                </div>

                
                <div className='message'>
                <div className='message__container'>
                    <GrContact className='message__icon'/>
                    <p className='message__title'>Send seller a message</p>
                </div>
                    <form onSubmit={handleSubmit}>
                        <input className='message__input'
                                type="text"
                                placeholder='Hi, Is this still available?'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        <input type="submit" className='message__button' />
                    </form>
                </div>
            </div>
        </section>

    );
}

export default ProductDetails;