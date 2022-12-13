import Header from "../../Components/Header/Header";
import ProductCardList from "../../Components/ProductCardList/ProductCardList"
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import "./HomePage.scss"

function HomePage() {
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