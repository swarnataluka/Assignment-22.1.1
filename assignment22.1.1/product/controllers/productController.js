//Create controller for CRUD operations and to make our operation more modular and meets MVC pattern
var mongoose = require("mongoose");
var Product = require("../models/Product");
//Create controller object for CRUD operations 
var productController = {};
//Add show list of product function
productController.list = function(req, res) {
    Product.find({}).exec(function (err, products) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/products/index", {products: products});
      }
    });
  };
  //Add show single product by id function
  productController.show = function(req, res) {
    Product.findOne({_id: req.params.id}).exec(function (err, product) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/products/show", {product: product});
      }
    });
  };
  //Add create product function, it just redirects to create the page
  productController.create = function(req, res) {
    res.render("../views/products/create");
  };
  //Add save new product function
  productController.save = function(req, res) {
    var product = new Product(req.body);
  
    product.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/products/create");
      } else {
        console.log("Successfully created an product.");
        res.redirect("/products/show/"+product._id);
      }
    });
  };
  //Add edit product by id function, it just redirects to edit page.
  productController.edit = function(req, res) {
    Product.findOne({_id: req.params.id}).exec(function (err, product) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/products/edit", {product: product});
      }
    });
  };
  //Add update product function for updating currently edited product
  productController.update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, price: req.body.price, description: req.body.description, color: req.body.color, category: req.body.category, brand: req.body.brand, product_status: req.body.product_status}}, { new: true }, function (err, product) {
      if (err) {
        console.log(err);
        res.render("../views/products/edit", {product: req.body});
      }
      res.redirect("/products/show/"+ product._id);
    });
  };
//Add delete product by id function for remove single product data.
  productController.delete = function(req, res) {
    Product.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Product deleted!");
        res.redirect("/products");
      }
    });
  };
//export productController as a module
  module.exports = productController;