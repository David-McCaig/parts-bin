require("dotenv").config();

const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

router.get("/", customerController.getAllCustomers);

// router.post("/", customerController.addCustomer);

// // router.get("/:id/product", warehouseController.getWarehouseInventories);

router
.route("/:id")
.get(customerController.getCustomerById)
// // .put(warehouseController.editWarehouse)
// // .patch(warehouseController.editWarehouse)
// // .delete(warehouseController.deleteWarehouse);
  
// module.exports = router;

// const router = require('express').Router();
// const customerController = require('../controllers/customerController');

// router.route('/').get(customerController.index);

module.exports = router;