//create a model for Product data
var mongoose = require('mongoose');
//The Schema will be mapping to MongoDB collections called products
var ProductSchema = new mongoose.Schema({
    name: {type: String, enum:['Dell laptop', 'Lenovo laptop', 'HP laptop', 'Acer laptop', 'Asus tablet', 'Toshiba laptop', 'Sony laptop', 'Microsoft laptop', 'Apple Ipad'], required: [true, 'Product name is required']},
    price: {type: Number, min:[499, 'Minimum value of the product'], max:[3499, 'Maximum value of the product'], required: [true, 'Product price is required']},
    description: {type: String, required: [true, 'Product description is required']},
    color: {type:String, enum:['Red', 'Black', 'White', 'Orange', 'White', 'Silver'], required: [true, 'Product color is required']},
    category: {type: String, enum: ['Laptop', 'Tablet'], required: [true, 'Product category is required']},
    brand: {type: String, enum: ['Dell','Lenovo','HP','Acer','Asus','Asus','Toshiba','Sony','Microsoft','Apple'], required: [true, 'Brand name is required']},
    product_status: {type: String, enum: ['available','not available','new','refurbished','sale'], required: [true,'product status is required']},
    updated_at: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Product', ProductSchema);