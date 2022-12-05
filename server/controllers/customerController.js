const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");

const getAllCustomers = async (_req, res) => {
    const costumerData = await db("customer");
    res.status(200).json(costumerData);
  };

  module.exports = {
  getAllCustomers
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