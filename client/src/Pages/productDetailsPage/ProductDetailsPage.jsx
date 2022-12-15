import './ProductDetailsPage.scss'
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function ProductDetailsPage() {

    const { id } = useParams();
    const [productToDisplay, setProductToDisplay] = useState("")
    const [customer, setCustomer] = useState("")


    const urlForProductList = `http://localhost:8000/product/${id}`

    useEffect(() => {
        axios
            .get(urlForProductList)
            .then((response) => {
                setProductToDisplay(response.data);
                const customerRequestUrl = `http://localhost:8000/customer/${response.data.customer_id}`
                axios
                    .get(customerRequestUrl)
                    .then((innerResponse) => {
                        setCustomer(innerResponse.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [urlForProductList]);

    if (!productToDisplay) return <h2>loading...</h2>

    return (
        <>
            <ProductDetails
                product={productToDisplay}
                customer={customer}
            />
        </>

    );
}

export default ProductDetailsPage;