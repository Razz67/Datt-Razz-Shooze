const express = require('express');
const methodOverride = require('method-override');
const mongoConfig = require('./config');
const jwt = require('jsonwebtoken');


require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// Set up view engine
app.set('view engine', 'ejs');
app.engine("jsx", require("express-react-views").createEngine());

// ********** Middleware **********
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());

// listen on port 
app.listen(port, () => console.log(`listening on port ${port}`));

// Connect to MongoDB 
mongoConfig();

