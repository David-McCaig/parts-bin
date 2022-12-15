import BikesList from "../../Components/BikesList/BikesList"
import { useState, useEffect } from "react";
import "./BikesPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function BikesPage() {
  const urlForProductList = `http://localhost:8000/product`;
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
  }, [id, urlForProductList]);

  if (productToDisplay.length === 0) {

    <div>Loading....</div>
  }


  return (
    <>
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