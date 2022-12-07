const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");

const getAllProduct = async (_req, res) => {
  try {
    const productData = await db("product")
    .select('product.id', 'customer_name', 'item_name', 'description', 'category','price', 'image_path')
    .join('customer', {'product.customer_id': 'customer.id'});
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addProductItem = async (req, res) => {
  console.log(req.body);
  //Validate request body input fields
  if (
    !req.body.item_name ||
    !req.body.description ||
    !req.body.category ||
    !req.body.price 
  ) {
    return res.status(400).json({
      message:
        "Please make sure to provide warehouse, item name, description, category, status and quantity fields in your request.",
    });
  }
  //Validate item quantity to not be less than 0
  // if (req.body.quantity < 0) {
  //   return res.status(400).json({
  //     message: "Please ensure that stock is not a negative number!",
  //   });
  // }
  //Validate item status and corresponding quantity
  // if (
  //   (req.body.status === "In Stock" && req.body.quantity === 0) ||
  //   (req.body.status === "Out of Stock" && req.body.quantity !== 0)
  // ) {
  //   return res.status(400).json({
  //     message: "Please ensure that stock status matches quantity!",
  //   });
  // }

  try {
    //Check if warehouse exists
    // const foundWarehouse = await db("warehouses").where({
    //   id: req.body.warehouse_id,
    // });
    // if (!foundWarehouse.length) {
    //   return res.status(404).json({ message: "Warehouse doesn't exist!" });
    // }
    //Check if item exists in same warehouse
    // const duplicateItem = await db("inventories").where({
    //   item_name: req.body.item_name,
    //   warehouse_id: req.body.warehouse_id,
    // });
    // if (duplicateItem.length) {
    //   return res
    //     .status(404)
    //     .json({ message: "Item already exists in warehouse, please edit!" });
    // }

    //Create inventory item
    const productItem = {
      ...req.body,
      id: uuid.v4(),
    };

    //Insert into inventory list
    await db("product").insert(productItem);
    //Successful add
    res.status(201).json(productItem);
  } catch (error) {
    console.log("error!");
    res.status(500).json({ error: error });
  }
};

module.exports = {
getAllProduct,
addProductItem
};