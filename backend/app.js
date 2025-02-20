const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname,'config','config.env')})

const connectDatabase = require('./data/connectDatabase');
connectDatabase();

const products = require('./routes/product');
const orders = require('./routes/order');    

app.use(products);
app.use(orders);

app.listen(process.env.PORT, ()=>{
    console.log(`Server Listening to Port ${process.env.PORT}`);
})