var express = require('express');
var app = express();
var ObjectId = require('mongodb').ObjectId;

//Show list of Products
app.get('/', function(req, res, next){
// fetch and sort Product collection by id in descending order
req.db.collection('Product').find().sort({"_id": -1}).toArray(function(err, result){
//if (err) return req.flash(err)
	if(err){
			req.flash('error', err)
			res.render('product/list', {
				title: 'Product List',
				data:''
			})
	}else{
//render to views/product/list.ejs template fileCreatedDate
			res.render('product/list', {
				title: 'Product list',
				data: result
			})
		}
	})
})
//Show ADD product form
app.get('/add', function(req, res, next){
// render to views/product/add.ejs
			res.render('product/add', {
				title: 'Add new product',
				name: '',
				price: '',
				description: '',
				color: '',
				category: '',
				brand: '',
				product_status: ''
			})
})
// Add new product post action
app.post('/add', function(req, res, next){
	req.assert('name1', 'name is required').notEmpty()  //validate name
	req.assert('price1', 'price is required').notEmpty() //validate price
	req.assert('description1', 'description is required').notEmpty() //validate description
	req.assert('color1', 'color is required').notEmpty() //validate color
	req.assert('category1', 'category is required').notEmpty() //validate category
	req.assert('brand1', 'brand is required').notEmpty() //validate brand
	req.assert('product_status1', 'product_status is required').notEmpty()//validate product_status
	req.assert('name2', 'name is required').notEmpty()  //validate name
	req.assert('price2', 'price is required').notEmpty() //validate price
	req.assert('description2', 'description is required').notEmpty() //validate description
	req.assert('color2', 'color is required').notEmpty() //validate color
	req.assert('category2', 'category is required').notEmpty() //validate category
	req.assert('brand2', 'brand is required').notEmpty() //validate brand
	req.assert('product_status2', 'product_status is required').notEmpty()//validate product_status
	req.assert('name3', 'name is required').notEmpty()  //validate name
	req.assert('price3', 'price is required').notEmpty() //validate price
	req.assert('description3', 'description is required').notEmpty() //validate description
	req.assert('color3', 'color is required').notEmpty() //validate color
	req.assert('category3', 'category is required').notEmpty() //validate category
	req.assert('brand3', 'brand is required').notEmpty() //validate brand
	req.assert('product_status3', 'product_status is required').notEmpty()//validate product_status
	req.assert('name4', 'name is required').notEmpty()  //validate name
	req.assert('price4', 'price is required').notEmpty() //validate price
	req.assert('description4', 'description is required').notEmpty() //validate description
	req.assert('color4', 'color is required').notEmpty() //validate color
	req.assert('category4', 'category is required').notEmpty() //validate category
	req.assert('brand4', 'brand is required').notEmpty() //validate brand
	req.assert('product_status4', 'product_status is required').notEmpty()//validate product_status
	req.assert('name5', 'name is required').notEmpty()  //validate name
	req.assert('price5', 'price is required').notEmpty() //validate price
	req.assert('description5', 'description is required').notEmpty() //validate description
	req.assert('color5', 'color is required').notEmpty() //validate color
	req.assert('category5', 'category is required').notEmpty() //validate category
	req.assert('brand5', 'brand is required').notEmpty() //validate brand
	req.assert('product_status5', 'product_status is required').notEmpty()//validate product_status
	var errors = req.validationErrors();
	if(!errors){ //Validation passed, since no errors were found
	var user = [{name: req.sanitize('name1').escape().trim(),
		price: req.sanitize('price1').escape().trim(),
		description: req.sanitize('description1').escape().trim(),
		color: req.sanitize('color1').escape().trim(),
		category: req.sanitize('category1').escape().trim(),
		brand: req.sanitize('brand1').escape().trim(),
		product_status: req.sanitize('product_status1').escape().trim()},
		{name: req.sanitize('name2').escape().trim(),
		price: req.sanitize('price2').escape().trim(),
		description: req.sanitize('description2').escape().trim(),
		color: req.sanitize('color2').escape().trim(),
		category: req.sanitize('category2').escape().trim(),
		brand: req.sanitize('brand2').escape().trim(),
		product_status: req.sanitize('product_status2').escape().trim()},
		{name: req.sanitize('name3').escape().trim(),
		price: req.sanitize('price3').escape().trim(),
		description: req.sanitize('description3').escape().trim(),
		color: req.sanitize('color3').escape().trim(),
		category: req.sanitize('category3').escape().trim(),
		brand: req.sanitize('brand3').escape().trim(),
		product_status: req.sanitize('product_status3').escape().trim()},
		{name: req.sanitize('name4').escape().trim(),
		price: req.sanitize('price4').escape().trim(),
		description: req.sanitize('description4').escape().trim(),
		color: req.sanitize('color4').escape().trim(),
		category: req.sanitize('category4').escape().trim(),
		brand: req.sanitize('brand4').escape().trim(),
		product_status: req.sanitize('product_status4').escape().trim()},
		{name: req.sanitize('name5').escape().trim(),
		price: req.sanitize('price5').escape().trim(),
		description: req.sanitize('description5').escape().trim(),
		color: req.sanitize('color5').escape().trim(),
		category: req.sanitize('category5').escape().trim(),
		brand: req.sanitize('brand5').escape().trim(),
		product_status: req.sanitize('product_status5').escape().trim()}];
		req.db.collection('Product').insertMany(user, function(err, result){
		if(err){
			req.flash('error', err)
//render to views/product/add.ejs
			res.render('product/add', {
				title: 'Add new product',
				name: user.name,
				price: user.price,
				description: user.description,
				color: user.color,
				category: user.category,
				brand: user.brand,
				product_status: user.product_status
		})
		}else{
			req.flash('success', '5 records added successfully');
			
//redirect user to list page
			res.redirect('/users');
		}
		})
		}else {//Display errors to user
		var error_msg = '';
		errors.forEach(function(error){
			error_msg += error.msg + '<br>'
		})
			req.flash('error', error_msg)
			res.render('product/add', {
				title: 'Add new product',
				name: req.body.name,
				price: req.body.price,
				description: req.body.description,
				color: req.body.color,
				category: req.body.category,
				brand: req.body.brand,
				product_status: req.body.product_status
		})
		}
		});
//Show edit product form
app.get('/edit/(:id)', function(req, res, next){
	var oid = new ObjectId(req.params.id)
	req.db.collection('Product').find({"_id": oid}).toArray(function(err, result){
		if(err) return console.log(err)
//if product not found
		if(!result){
			req.flash('error', 'User not found with id = ' + req.params.id);
			res.redirect('/users');
		}
		else { //if user found
// render to views/product/edit.ejs template file
			res.render('product/edit', {
			title: 'Edit product',
			id: result[0]._id,
			name: result[0].name,
			price: result[0].price,
			description: result[0].description,
			color: result[0].color,
			category: result[0].category,
			brand: result[0].brand,
			product_status: result[0].product_status
			})
		}
	})
})
//Edit product post action
app.put('/edit/(:id)', function(req, res, next){
		req.assert('name', 'name is required').notEmpty(),
		req.assert('price', 'price is required').notEmpty(),
		req.assert('description', 'description is required').notEmpty(),
		req.assert('color', 'color is required').notEmpty(),
		req.assert('category', 'category is required').notEmpty(),
		req.assert('brand', 'brand is required').notEmpty(),
		req.assert('product_status', 'product_status is required').notEmpty()
		var errors = req.validationErrors()
		if(!errors) { //Validation passed, since no errors were found
		var user = {
			name: req.sanitize('name').escape().trim(),
			price: req.sanitize('price').escape().trim(),
			description: req.sanitize('description').escape().trim(),
			color: req.sanitize('color').escape().trim(),
			category: req.sanitize('category').escape().trim(),
			brand: req.sanitize('brand').escape().trim(),
			product_status: req.sanitize('product_status').escape().trim()
		}
			var oid= new ObjectId(req.params.id)
			req.db.collection('Product').update({"_id": oid}, user, function(err, result){
			if(err) {
			req.flash('error', err)
//render to views/product/edit.ejs
			res.render('product/edit', {
			title: 'Edit product',
			id: req.params.id,
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			color: req.body.color,
			category: req.body.category,
			brand: req.body.brand,
			product_status: req.body.product_status
			})
			}else{
				req.flash('success', 'Record updated successfully')
				res.redirect('/users');
			}
			})
		}else { //Display errors to user
			var error_msg = '';
			errors.forEach(function(error){
				error_msg += error.msg + '<br>';
			})
			req.flash('error', error_msg)
			res.render('product/edit', {
				title: 'Edit product',
				id: req.params.id,
				name: req.body.name,
				price: req.body.price,
				description: req.body.description,
				color: req.body.color,
				category: req.body.category,
				brand: req.body.brand,
				product_status: req.body.product_status
			})
		}
})
//Delete Product
app.delete('/delete/(:id)', function(req, res, next){
		var oid = new ObjectId(req.params.id)
		req.db.collection('Product').remove({"_id": oid}, function(err, result)
		{
				if(err){
					req.flash('error', err)
//redirect user to list page
					res.redirect('/users');
				} else{
					req.flash('success', 'User deleted successfully! id = ' + req.params.id)
//redirect user to list page
					res.redirect('/users');
				}
			})
})
//Delete all Products having product_status "not available"
app.delete('/delete/', function(req, res, next){
	req.db.collection('Product').remove({product_status: "not available"},function(err, result){
		if(err){
			req.flash('error',err)
			res.redirect('/users');
			}else{
			//render to views/product/list.ejs template fileCreatedDate
			req.flash('success', 'Record/s having product_status "not available" were deleted successfully!' );
			res.redirect('/users');
			}
		})
	})

module.exports = app;