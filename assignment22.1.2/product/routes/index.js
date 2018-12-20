var express = require('express');
var app = express();

app.get('/', function(req, res){
//render to views/index.ejs template file
res.render('index', {title: 'This is a Product application'});
});

// MongoClient object is created
var MongoClient = require('mongodb').MongoClient; 
/* productDatabase is created in MongoDB specified connection URL with the connect ip address */
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser: true}, function(err, db){
    if(err) throw err;
    var databaseObj  = db.db("productDatabase");
    //Creates employee collection with application specific validation rules
    databaseObj.createCollection("Product", {
    validator: {
    $jsonSchema: {
    bsonType: "object",
    required: ["name","price","description","color","category","brand","product_status"],
            properties:{
                        name:{
                        bsonType:"string",
                        description: "must be a string and is required"
                        },
				price: {
                        bsonType: "number",
                        description: "must be a integer and is required"
                        },
            description: {
                        bsonType:"string",
                        description: "must be a string and is required"
                        },
                color: {
                        bsonType:"string",
                        description: "must be a string and is required"
                        },
			category: {
                        bsonType:"string",
                        description: "must be a string and is required"
                        },
                brand: { bsonType:"string",
                        description: "must be a string and is required"
                        },
		product_status: { enum: ["available", "not available"],
                        description: "must be a string and is required"			
						}
                    }
                }
            },
            validationAction: "warn"
        })      
//prodObj is a JSON object 
var prodObj = [
    {name: "Dell Laptop", price: 799, description:"Light and compact",color:"Red", category:"Laptop", brand:"Dell", product_status:"available"},{name: "Apple IPAD", price: 699, description:"Designed for best user experience",color:"White", category:"Tablet", brand:"Apple",product_status:"available"},{name: "Sony Vio", price: 1400, description:"Best quality",color:"Orange", category:"Laptop", brand:"Sony",product_status:"available"},{name: "Toshiba Laptop", price: 1499, description:"Ultra modern",color:"Black", category:"Laptop", brand:"Toshiba",product_status:"available"},{name: "HP Laptop", price: 999, description:"The best",color:"White", category:"Laptop", brand:"HP", product_status:"available"},{name: "MacBook Pro", price: 1319, description:"Fast and has best display features",color:"White", category:"Laptop", brand:"Apple", product_status:"available"},{name: "Lenovo Laptop", price: 1299, description:"Ranked best",color:"Black", category:"Laptop", brand:"Lenovo", product_status:"available"},{name: "Apple Iphone 6", price: 699, description:"Superior design",color:"Silver", category:"Mobile Phone", brand:"Apple", product_status:"available"},{name: "Acer Laptop", price: 899, description:"Sound product",color:"White", category:"Laptop", brand:"Acer", product_status:"available"},{name: "Microsoft Surface", price: 1699, description:"Elegant in design",color:"Blue", category:"Laptop", brand:"Microsoft", product_status:"available"}];
    databaseObj.collection("Product").insertMany(prodObj, function(err, res){
        if(err) throw err;
        console.log("Collection Product with list of records "+ res.insertedCount + " created.");
        db.close();
    });
});

module.exports = app;