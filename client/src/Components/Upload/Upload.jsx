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
        navigate("/uploadsuccess")
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
      <form onSubmit={handleSubmit((data) => {
        return handleUpdateSaved(data)
      })} className="upload-add-form">
        {/*Add image*/}
        <div className="upload__container">
          <input type="file" name="image_path" className="upload__button" onChange={handleFileChange} />
        </div>

        {/* Item Details */}
        <div className="upload-add-form__item-details">
          <div className="upload-add-form__main-header"></div>

          <div>
            <label className="upload-add-form__headings" htmlFor="item_name">
              Customer Name
            </label>
            <input
              {...register("customer_name", {
                required: 'Input field is required !', minLength: {
                  value: 4,
                  message: 'Input field is required !'
                }
              })}
              type="text"
              value={values.customer_name}
              onChange={handleInputChange}
              className="upload-add-form__name"
              id="customer_name"
              name="customer_name"
              placeholder="Customer_name"
            ></input>

            <p className="error__message">{errors.customer_name?.message}</p>
          </div>

          <div>
            <label className="upload-add-form__headings" htmlFor="item_name">
              Email
            </label>
            <input
              type="text"
              {...register("email", {
                // required: false,
                required: 'Valid email required !',
                pattern: {
                  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message: 'Valid email required !'
                },

              })}
              value={values.email}
              onChange={handleInputChange}
              className="upload-add-form__name"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
            <p className="error__message">{errors.email?.message}</p>
          </div>

          <div>
            <label className="upload-add-form__headings" htmlFor="item_name">
              Price
            </label>
            <input
              {...register("price", {
                required: 'Input field required !', minLength: {
                  value: 4,
                  message: 'Input field required !'
                }
              })}
              type="text"
              value={values.price}
              onChange={handleInputChange}
              className="upload-add-form__name"
              id="price"
              name="price"
              placeholder="Price"
            ></input>
            <p className="error__message">{errors.price?.message}</p>
          </div>

          <div>
            <label className="upload-add-form__headings" htmlFor="item_name">
              Item Name
            </label>
            <input
              {...register("item_name", {
                required: 'Input field required !', minLength: {
                  value: 4,
                  message: 'Input field required !'
                }
              })}
              type="text"
              value={values.item_Name}
              onChange={handleInputChange}
              className="upload-add-form__name"
              id="item_name"
              name="item_name"
              placeholder="Item Name"
            ></input>
            <p className="error__message">{errors.item_name?.message}</p>
          </div>
          <div>
            <label
              className="upload-add-form__headings"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              {...register("description", {
                required: 'Input field required !', minLength: {
                  value: 4,
                  message: 'Input field required !'
                }
              })}
              type="text"
              value={values.description}
              onChange={handleInputChange}
              className="upload-add-form__description"
              id="description"
              name="description"
              placeholder="Please enter a brief item description..."
            ></textarea>
            <p className="error__message">{errors.description?.message}</p>
          </div>
          {/* Item Category Dropdown */}
          <div>
            <label className="upload-add-form__headings" htmlFor="category">
              Category
            </label>
            <select
              {...register("category", {
                required: 'Please select a category !', minLength: {
                  value: 4,
                  message: 'Please select a category !'
                }
              })}
              onChange={handleInputChange}
              className="upload-add-form__category"
              name="category"
              id="category"
              placeholder="Please select"
            >
              <option value="">Please Select</option>
              <option value="bikes">Bikes</option>
              <option value="components">Components</option>
            </select>
            <p className="error__message">{errors.category?.message}</p>
          </div>
        </div>

        <div className="upload-add-form__item-availability">

          <div className="upload-add-form__status-container">
            <div>
              <div className="upload-add-form__everything-radio-container">
                <div className="upload-add-form__radio-container">

                </div>
              </div>
            </div>

            {/* Warehouse Dropdown Menu  */}
            <div>
              <div>
                <label
                  className="upload-add-form__headings"
                  htmlFor="warehouse"
                >
                  {/* Warehouse */}
                </label>
              </div>
              <p className="upload-add-form__message">
                {confirmationMessage}
              </p>
            </div>
          </div>
        </div>

        <div className="upload-add-form__button-container">
          {/* Cancel Button  */}
          <button
            onClick={handleCancelClick}
            className="upload-add-form__cancel-button"
          >
            Cancel
          </button>
          {/* Add Button  */}
          <button type="submit" className="upload-add-form__add-button">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;