const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");
const uuid4 = require("uuid4");
const {getOrInsertCustomer} = require('./customerController');
const { default: knex } = require("knex");

const path = require ('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-'+ file.originalname)
  }
})

const upload = multer({ storage : storage })
// const upload = multer({ dest: 'public/images' })

const getAllProduct = async (_req, res) => {
  try {
    const productData = await db("product")
      .where({category:'Bikes'})
      .select('product.id', 'customer_name', 'email', 'item_name', 'description', 'category', 'price', 'image_path')
      .join('customer', { 'product.customer_id': 'customer.id' });
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


const getComponents = async (_req, res) => {
  try {
    const componentData = await db("product")
    .where({category:'Components'})
    .select('product.id', 'customer_name', 'email', 'item_name', 'description', 'category', 'price', 'image_path')
    .join('customer', { 'product.customer_id': 'customer.id' });
    res.status(200).json(componentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
  





const addProductItem = async (req, res) => {
 
    upload.single('imageFile')(req, res, async (err)=> {
      if (
        !req.body.item_name ||
        !req.body.description ||
        !req.body.category ||
        !req.body.price ||
        !req.body.customer_name ||
        !req.body.email 
      ) {
        return res.status(400).json({
          message:
            "Please make sure to provide customer, item name, description, category, status and quantity fields in your request.",
        });
        
      }
      console.log(err)
      if(err) {
        res.status(500).json({error: err})
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
             image_path: `http://localhost:8000/images/${req.file.filename}`,
             id: uuid4()
           });
           return res.status(201).json({ message: "Product created" });
         
       } catch (error) {
         console.log(error);
         res.status(500).json({ error: error });
       }
    })
  
  
 
 // Validate request body input fields


};


const getProductById = async (req, res) => {
  try {
    const productData = await db("product").where({ id: req.params.id });
    res.status(200).json(productData[0]);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllProduct,
  addProductItem,
  getProductById,
  getComponents,
};