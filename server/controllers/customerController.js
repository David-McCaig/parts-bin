const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");

const validateCustomer = (customer) => {
  if (!customer.customer_name || !customer.email) return false
  return true
}

const getAllCustomers = async (_req, res) => {
  const costumerData = await db("customer");
  res.status(200).json(costumerData);
};

// const addCustomer = async (req, res) => {
//   console.log(req.body);
//   //Validate request body input fields
//   if (
//     !req.body.customer_name ||
//     !req.body.email
//   ) {
//     return res.status(400).json({
//       message:
//         "Please make sure to provide customer name and email fields in your request.",
//     });
//   }

//   try {
//     //Check if customer exists
//     const findCustomer = await db("customer").where({
//       customer_name: req.body.customer_name,
//     });
//     if (findCustomer.length) {
//       return res.status(404).json({ message: "This customer already exists, please edit!" });
//     }

//     //Create new customer
//     const newCustomer = {
//       ...req.body,
//       id: uuid.v4(),
//     };

//     //Insert into customer list
//     await db("customer").insert(newCustomer);
//     //Successful add
//     res.status(201).json(newCustomer);
//   } catch (error) {
//     console.log("error!!!");
//     res.status(500).json({ error: error });
//   }
// };



const getCustomerById = async (req, res) => {
  try {
    const customerData = await db("customer").where({ id: req.params.id });
    res.status(200).json(customerData[0]);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const getCustomerByEmail = async (req, res) => {

  try {
    const email = req.body.email
    if (!email) {
     return { message: "Email is required when querying for customer" }
    }
    const customerData = await db("customer").where({ email });
    return customerData
  } catch (error) {
    console.log('getCustomerByEmail failed');
    return error
  }
};

const getOrInsertCustomer = async (req, res) => {
  try {
    const customerQuery = await getCustomerByEmail(req, res)
    // email not provided in query
    if (customerQuery.message) throw new Error(customerQuery.message)
    // customer exists 
    if (customerQuery[0]) return customerQuery[0];
    // insert new customer
    if (!customerQuery.length) {
      console.log({body: req.body, validate: validateCustomer(req.body)})
      if (!validateCustomer(req.body)) throw new Error('Missing customer fields')
    
      await db('customer').insert({
      id: uuid.v4(),
      email: req.body.email, 
      customer_name: req.body.customer_name
    })
    const newCustomer = await getCustomerByEmail(req, res)
    return newCustomer
  }
    
  } catch (error) {
    console.log('getOrInsertCustomer failed');
    return error
  }
}



module.exports = {
  getAllCustomers,
  // addCustomer,
  getCustomerById,
  getOrInsertCustomer
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