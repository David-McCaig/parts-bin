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

module.exports = {
getAllProduct
};