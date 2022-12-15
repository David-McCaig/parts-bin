import Components from "../../Components/Components/ComponentsList"
import { useState, useEffect } from "react";
import "./ComponentsPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ComponentsPage() {
  const urlForProductList = "http://localhost:8000/product/components";
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

  if (productToDisplay.length === 0) {

    <div>Loading....</div>
  }


  return (
    <>
      {/* <h1>This is the bikes page</h1> */}


      <div className="bike__list">
        <Components
          products={productToDisplay}
          setproductToDisplay={setproductToDisplay}
        />
      </div>
    </>


  );
}
export default ComponentsPage;