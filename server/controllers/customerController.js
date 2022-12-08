const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");

const getAllCustomers = async (_req, res) => {
    const costumerData = await db("customer");
    res.status(200).json(costumerData);
  };

  const addCustomer = async (req, res) => {
    console.log(req.body);
    //Validate request body input fields
    if (
      !req.body.customer_name ||
      !req.body.email 
    ) {
      return res.status(400).json({
        message:
          "Please make sure to provide warehouse name, address, city, country, contact name, contact position, phone number, and email fields in your request.",
      });
    }
  
    try {
      //Check if warehouse customer
      const findCustomer = await db("customer").where({
        customer_name: req.body.customer_name,
      });
      if (findCustomer.length) {
        return res.status(404).json({ message: "This customer already exists, please edit!" });
      }
  
      //Create new customer
      const newCustomer = {
        ...req.body,
        id: uuid.v4(),
      };
  
      //Insert into customer list
      await db("customer").insert(newCustomer);
      //Successful add
      res.status(201).json(newCustomer);
    } catch (error) {
      console.log("error!!!");
      res.status(500).json({ error: error });
    }
  };

  const getCustomerById = async (req, res) => {
    try {
      const customerData = await db("customer").where({ id: req.params.id });
      res.status(200).json(customerData[0]);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };



  module.exports = {
  getAllCustomers,
  addCustomer,
  getCustomerById
  }

// const knex = require('knex')(require('../knexfile'));

// exports.index = (_req, res) => {
//   knex('customer')
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) =>
//       res.status(400).send(`Error retrieving Warehouses: ${err}`)
//     );
// };