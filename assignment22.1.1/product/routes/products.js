/* Add routes for product module that is to redirect the request to the controller before call query or display page */
var express = require('express');
//create router
var router = express.Router();
//Add require to point to productController.js
var product = require("../controllers/productController.js");
// Get all products
router.get('/', product.list);

// Get single product by id
router.get('/show/:id', product.show);

// Create product
router.get('/create', product.create);

// Save product
router.post('/save', product.save);

// Edit product
router.get('/edit/:id', product.edit);

// Edit update
router.post('/update/:id', product.update);

// Edit update
router.post('/delete/:id', product.delete);

//Export router as a module
module.exports = router;