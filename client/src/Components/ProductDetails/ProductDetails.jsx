import './ProductDetails.scss'
import React from 'react';
import { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { TbFileDescription } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import { CgNametag } from "react-icons/cg";


function ProductDetails({ product, customer }) {
    console.log(customer)

    const [name, setName] = useState("");
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setConfirmationMessage(`Message sent!`);
    }

    return (
        <section className='product'>

            <img className="product-details__image" alt={'Mosaic bike for sale'} src={product.image_path}></img>


            <div className='product-details'>
                <div >
                    <h2 className='product-details__title'>{product.item_name} </h2>
                    <div className='product-details__container'>
                        <CgNametag className="product-details__logo" />
                        <p className='product-details__location'>  {customer.customer_name} </p>
                    </div>
                    <div className='product-details__container'>
                        <ImLocation2 className="product-details__logo" />
                        <p className='product-details__location'>  Toronto </p>
                    </div>
                    <div className='product-details__container'>
                        <ImPriceTags className="product-details__logo" />
                        <p className='product-details__price'>{product.price}</p>
                    </div>

                    <div className='product-details__container-description'>
                        <TbFileDescription className="product-details__logo-description" />
                        <p className='product-details__description'>{product.description}</p>
                    </div>
                </div>


                <div className='message'>
                    <div className='message__container'>
                        <GrContact className='message__icon' />
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
                        <p className='message__sent'>{confirmationMessage}</p>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default ProductDetails;