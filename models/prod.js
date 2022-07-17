// Import
// car model schema
// File Name: car.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: Car Applcation
let mongoose = require('mongoose');

// Create a model class
let prodModel = mongoose.Schema(
    {
        productname: String,
        productdescription: String,
        condition: String,
        color: String,
        sellername:String,
        price: Number        
    },
    {
        collection: "Products"
    }
);

module.exports = mongoose.model('Products', prodModel);