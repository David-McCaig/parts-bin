import BikesList from "../../Components/BikesBikes/BikesList"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./BikesPage.scss";
import { useParams} from "react-router-dom";


import axios from "axios";

function BikesPage() {
    const urlForProductList = "http://localhost:8000/product";
    const [productToDisplay, setproductToDisplay] = useState([]);
  
    const { id } = useParams();
  
    useEffect(() => {
      axios
        .get(urlForProductList)
        .then((response) => {
          setproductToDisplay(response.data);
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);
  
    if(productToDisplay.length === 0){
  
      <div>Loading....</div>
    }

    
    return (
      <>
      {/* <h1>This is the bikes page</h1> */}
      
      
      <div className="bike__list">
        <BikesList
          products={productToDisplay}
          setproductToDisplay={setproductToDisplay}
          />
     </div>
    </>


    );
    }
    export default BikesPage;