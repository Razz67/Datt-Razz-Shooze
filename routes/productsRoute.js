const express = require("express");
const router = express.Router();


const { 
    showNewView,
    seedData, 
    showEditView, 
    showOneProduct, 
    createNewProduct, 
    updateOneProduct, 
    deleteOneProduct, 
    findAllProducts 
} = require('../controllers/productController');


// Set up our routes

// Index Route
router.get('/', findAllProducts);

// New Route
router.get("/new", showNewView);

// Delete Route
router.delete('/:id', deleteOneProduct);

// Update Route
router.put('/:id', updateOneProduct);

// Create Route
router.post('/', createNewProduct);

// Edit Route
router.get('/:id/edit', showEditView);

// Seed Route
router.get('/seed', seedData);

// Show Route
router.get('/:id', showOneProduct);
    

module.exports = router