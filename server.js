// Load express
const express = require("express");
const app = express();
require("dotenv").config();
const mongooseConfig = require("./config")// Load mongoose
const methodOverride = require("method-override");

// Load our routes
const productsRoute = require("./routes/productsRoute");

// Identify our port
const port = process.env.PORT;

// setup our view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.static("public + /images"));


app.use("/products", productsRoute);


// Listen to port
app.listen(port, () => {
	console.log("Listening on port: ", port);
});

// Load mongoose
mongooseConfig();
