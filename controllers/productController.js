const Product = require("../models/product.js");

// Bring in our seed data
const seed = require("../models/seed");

// ROUTE    GET /Products     (index)
const findAllProducts = (req, res) => {
	Product.find({}, (err, foundProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("products/Index", { products: foundProduct });
		}
	});
};

// ROUTE    Get /Products/new    (new)
const showNewView = (req, res) => {
	res.render("products/New");
};

// ROUTE    DELETE /Products/:id    (destroy)
const deleteOneProduct = (req, res) => {
	Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/products");
		}
	});
};

// ROUTE    Put /Products/:id    (update)
const updateOneProduct = (req, res) => {
	if (req.body.instock > 0) {
		req.body.instock = true;
	} else {
		req.body.instock = false;
	}

	Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect(`/products/${updatedProduct._id}`);
		}
	});
};

// ROUTE    POST /Products    (create)
const createNewProduct = (req, res) => {
	if (req.body.instock > 0) {
		req.body.instock = true;
	} else {
		req.body.instock = false;
	}

	Product.create(req.body, (err, createdProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/products");
		}
	});
};

// ROUTE      GET /Products/:id/edit     (edit)
const showEditView = (req, res) => {
	Product.findById(req.params.id, (err, foundProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("products/Edit", { products: foundProduct });
		}
	});
};

// ROUTE    Get /Products/:id    (show)
const showOneProduct = (req, res) => {
	Product.findById(req.params.id, (err, foundProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("products/Show", { products: foundProduct });
		}
	});
};

// ROUTE       GET /Products/seed      (seed)
const seedData = (req, res) => {
	Product.deleteMany({}, (err, deletedProducts) => {
		if (err) {
			res.status(400).json(err);
		} else {
			Product.create(seed.products, (err, createdProducts) => {
				if (err) {
					res.status(400).json(err);
				} else {
					res.status(200).redirect("/products");
				}
			});
		}
	});
};

// ROUTE       GET /Products/clear      (clear)
const clearData = (req, res) => {
	Product.deleteMany({}, (err, deletedProducts) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/products");
		}
	});
};

module.exports = {
	findAllProducts,
	showNewView,
	deleteOneProduct,
	updateOneProduct,
	createNewProduct,
	showEditView,
	seedData,
	clearData,
	showOneProduct,
};
