import "./Upload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Upload = () => {
  //Navigation
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log(errors)



  //State Variables
  const [imageFile, setImageFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [values, setValues] = useState({
    customer_id: "",
    item_name: "",
    description: "",
    category: "",
    price: "",
    image_path: "",
    customer_name: "",
    email: "",
  });

  //Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    console.log(event.target.files)
    setImageFile(event.target.files[0])
  }


  //Handle Cancel Button
  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  //Handle Save Button
  const handleUpdateSaved = (event) => {
    event.preventDefault();
    console.log(imageFile)

    //Fetch inventory endpoint
    const urlForInventoryAdd = `http://localhost:8000/product/upload`;
    //POST request to add inventory item
    const formData = new FormData();
    formData.append("item_name", values.item_name);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("customer_name", values.customer_name);
    formData.append("email", values.email);
    formData.append("price", values.price);
    formData.append("imageFile", imageFile);
    console.log(formData)
    axios
      .post(urlForInventoryAdd, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
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

      {/* Add Form */}
      <form onSubmit={handleUpdateSaved} className="inventory-add-form">
      <div className="upload__container">
        <input type="file" name="image_path" className="upload__button" onChange={handleFileChange} />
      </div>
      
        {/* Item Details */}
        <div className="inventory-add-form__item-details">
          <h2 className="inventory-add-form__main-header">Bike for sale</h2>
          {/* Item Name */}
          {/* <div>
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
          </div> */}

          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              Customer Name
            </label>
            <input
              {...register("customer_name", { required: 'Full Name is required', minLength: {
                value: 4,
                message:'Full name is required'
              } })}
              type="text"
              value={values.customer_name}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="customer_name"
              name="customer_name"
              placeholder="customer_name"
            ></input>
            <p>{errors.customer_name?.message}</p>
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
            </select>
          </div>
        </div>

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