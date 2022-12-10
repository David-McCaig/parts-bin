const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");
const uuid4 = require("uuid4");
const {getOrInsertCustomer} = require('./customerController')

const getAllProduct = async (_req, res) => {
  try {
    const productData = await db("product")
      .select('product.id', 'customer_name', 'email', 'item_name', 'description', 'category', 'price', 'image_path')
      .join('customer', { 'product.customer_id': 'customer.id' });
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};



const addProductItem = async (req, res) => {
  // console.log(req.body);
  //Validate request body input fields
  if (
    !req.body.item_name ||
    !req.body.description ||
    !req.body.category ||
    !req.body.price ||
    !req.body.customer_name ||
    !req.body.email ||
    !req.body.image_path
  ) {
    return res.status(400).json({
      message:
        "Please make sure to provide customer, item name, description, category, status and quantity fields in your request.",
    });
  }

  try {

   const customer = await getOrInsertCustomer(req, res) 
   console.log('Add product cusomter called', {customer})
      await db("product").insert({
        customer_id: customer[0].id,
        item_name: req.body.item_name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image_path: req.body.image_path,
        id: uuid4()
      });
      return res.status(404).json({ message: "This customer already exists, please edit!!!!" });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};



//we receive the body from the frontend
//we make sure that we have all the information we need
//we need to make two database insertions

//check if the customer already exists in the db.
//const customerInDB = await db(customers).select("email")
//if(!customerInDB.length){create the customer (db insert...)}

//const newProduct = await db(product).insert...
//res(201).json(newProduct[0])


const getProductById = async (req, res) => {
  try {
    const productData = await db("product").where({ id: req.params.id });
    res.status(200).json(productData[0]);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// const addProductItem = async (req, res) => {
//   console.log(req.body);
//   //Validate request body input fields
//   if (
//     !req.body.customer_id ||
//     !req.body.item_name ||
//     !req.body.description ||
//     !req.body.category ||
//     !req.body.price 
//   ) {
//     return res.status(400).json({
//       message:
//         "Please make sure to provide warehouse name, address, city, country, contact name, contact position, phone number, and email fields in your request.",
//     });
//   }

//   try {
//     //Check if warehouse exists
//     const findProduct = await db("product").where({
//       item_name: req.body.item_name,
//     });
//     if (findProduct.length) {
//       return res.status(404).json({ message: "This warehouse already exists, please edit!" });
//     }

//     //Create new warehouse
//     const newProduct = {
//       ...req.body,
//       id: uuid.v4(),
//     };

//     //Insert into warehouse list
//     await db("product").insert(newProduct);
//     //Successful add
//     res.status(201).json(newProduct);
//   } catch (error) {
//     console.log("error!!!");
//     res.status(500).json({ error: error });
//   }
// };


module.exports = {
  getAllProduct,
  addProductItem,
  getProductById
};