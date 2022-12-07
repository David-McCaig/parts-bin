require('dotenv').config();
const PORT = process.env.DB_LOCAL_PORT || 8080;

const customerRouter = require('./routes/customerRouter.js');
const productRouter = require('./routes/productRouter.js');

const express = require('express');
const app = express();
const multer = require('multer');

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/customer', customerRouter);
app.use('/product', productRouter);
  
  app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });

