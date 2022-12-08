require("dotenv").config();

const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getAllProduct);

router.post("/", productController.addProductItem);

router
  .route("/:id")
  .get(productController.getProductById);
//   .put(productController.editProduct)
//   .delete(productController.deleteProduct);

module.exports = router;