require("dotenv").config();

const express = require("express");
const router = express.Router();
const path = require('path')



// const upload = multer({storage: storage})


const productController = require("../controllers/productController");

router.get("/", productController.getAllProduct);

router.post("/upload", productController.addProductItem);

router
  .route("/:id")
  .get(productController.getProductById);
  // .put(productController.editProduct)
  // .delete(productController.deleteProduct);

module.exports = router;