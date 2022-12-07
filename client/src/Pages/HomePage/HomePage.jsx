import Header from "../../Components/Header/Header";
import ProductCardList from "../../Components/ProductCardList/ProductCardList"
import NavBar from "../../Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./HomePage.scss"

function HomePage() {
  const urlForProductList = "http://localhost:8000/product";
  const [productToDisplay, setproductToDisplay] = useState([]);

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
  }, []);

  return (
    <>
      <Header />
      <div className="product__list">
        <ProductCardList
          products={productToDisplay}
          setproductToDisplay={setproductToDisplay}
        />
      </div>
    </>
  );
}

export default HomePage;