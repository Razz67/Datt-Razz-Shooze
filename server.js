const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const mongoConfig = require('./config');
const path = require('path');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;



require('dotenv').config();

// Set up view engine
app.set('view engine', 'ejs');
app.engine("jsx", require("express-react-views").createEngine());

// ********** Middleware **********
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json());

// serve client files
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

// listen on port 
app.listen(port, () => console.log(`listening on port ${port}`));

// Connect to MongoDB 
mongoConfig();
