import "./Upload.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Upload = () => {
  //Navigation
  const navigate = useNavigate();

  //State Variables
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [values, setValues] = useState({
    customer_id: "",
    item_name: "",
    description: "",
    category: "",
    price: "",
    image_path:"",
    customer_name:"",
    email:"",
  });

  // Fetch warehouse list
  // const urlForWarehouseList = "http://localhost:8000/customer";
  // useEffect(() => {
  //   axios
  //     .get(urlForWarehouseList)
  //     .then(({ data }) => {
  //       console.log(data)
  //       setWarehouseList(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  //Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //Handle Cancel Button
  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  //Handle Save Button
  const handleUpdateSaved = (event) => {
    event.preventDefault();
    //Fetch inventory endpoint
    const urlForInventoryAdd = `http://localhost:8000/product/`;
    //POST request to add inventory item
    axios
      .post(urlForInventoryAdd, {
        // customer_id: values.customer_id,
        item_name: values.item_name,
        description: values.description,
        category: values.category,
        price: values.price,
        image_path: values.image_path,
        customer_name: values.customer_name,
        email: values.email,
      })
      .then(function () {
        setConfirmationMessage(`added to inventory!`);
      })
      //Confirm unsuccessful item add message
      .catch((error) => {
        console.log(error);
        setConfirmationMessage(
          `Unable to add ${values.item_name} to inventory!`
        );
      });
  };

  return (
    //Add Form Heading
    <div className="inventory-add-form-top">
      <Link to={`/inventory`}>
        <div className="inventory-add-form-top__nav-div">
          <img  alt="Arrow back"></img>
          <h2>Add Inventory Item</h2>
        </div>
      </Link>

      {/* Add Form */}
      <form onSubmit={handleUpdateSaved} className="inventory-add-form">
        {/* Item Details */}
        <div className="inventory-add-form__item-details">
          <h2 className="inventory-add-form__main-header">Item Details</h2>
          {/* Item Name */}
          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              image path
            </label>
            <input
              type="text"
              value={values.image_path}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="image_path"
              name="image_path"
              placeholder="image_path"
            ></input>
          </div>

          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              customer name
            </label>
            <input
              type="text"
              value={values.customer_name}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="customer_name"
              name="customer_name"
              placeholder="customer_name"
            ></input>
          </div>

          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              Email
            </label>
            <input
              type="text"
              value={values.email}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="email"
              name="email"
              placeholder="email"
            ></input>
          </div>
          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              price
            </label>
            <input
              type="text"
              value={values.price}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="price"
              name="price"
              placeholder="price"
            ></input>
          </div>

          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              Item Name
            </label>
            <input
              type="text"
              value={values.item_Name}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="item_name"
              name="item_name"
              placeholder="Item Name"
            ></input>
          </div>
          <div>
            <label
              className="inventory-add-form__headings"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              type="text"
              value={values.description}
              onChange={handleInputChange}
              className="inventory-add-form__description"
              id="description"
              name="description"
              placeholder="Please enter a brief item description..."
            ></textarea>
          </div>
          {/* Item Category Dropdown */}
          <div>
            <label className="inventory-add-form__headings" htmlFor="category">
              Category
            </label>
            <select
              onChange={handleInputChange}
              className="inventory-add-form__category"
              name="category"
              id="category"
              placeholder="Please select"
            >
              <option value="">Please Select</option>
              <option value="bikes">bikes</option>
              <option value="components">components</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>
         Item Availability 
         <div className="inventory-add-form__item-availability">
      
          <div className="inventory-add-form__status-container"> 
            <div>
              <div className="inventory-add-form__everything-radio-container">
                <div className="inventory-add-form__radio-container">

                </div>
              </div>
            </div> 

             {/* Warehouse Dropdown Menu  */}
             <div>
              <div> 
                 <label
                  className="inventory-add-form__headings"
                  htmlFor="warehouse"
                >
                  {/* Warehouse */}
                </label> 
               </div>
              <p className="inventory-add-form__message">
                {confirmationMessage}
              </p>
            </div> 
           </div>
        </div> 

        <div className="inventory-add-form__button-container">
           {/* Cancel Button  */}
          <button
            onClick={handleCancelClick}
            className="inventory-add-form__cancel-button"
          >
            Cancel
          </button>
           {/* Add Button  */}
          <button type="submit" className="inventory-add-form__add-button">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;