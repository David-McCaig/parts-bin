require("dotenv").config();

const express = require("express");
const router = express.Router();



const customerController = require("../controllers/customerController");

router.get("/", customerController.getAllCustomers);


router
.route("/:id")
.get(customerController.getCustomerById)


module.exports = router;