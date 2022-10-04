const express = require('express');
const router = express.Router();

// load our Product model
const Product = require('../models/products');

// Set up our routes

// Index Route
router.get('/', (req, res) => {
    Product.find({}, (err, foundProducts) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        // res.status(200).json(foundProducts);
        res.status(200).render('products/Index', {
            products: foundProducts
        });
    });
});

// New Route
router.get('/new', (req, res) => {
    res.render('products/New');
});

// Delete Route
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(deletedProduct);
    });
});

// Update Route
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedProduct) => {
            if (err) {
                res.status(400).json({ error: err.message });
            }
            res.status(200).json(updatedProduct);
        }
    );
});

// Create Route
router.post('/', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(createdProduct);
    });
});

// Edit Route
router.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundProduct);
    });
});

// Show Route
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundProduct);
    });
});

module.exports = router