// database connection
// File Name: db.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: Car Applcation
// Do not expose your credentials in your code.

// username: aruna password: midterm
  let atlasDB= "mongodb+srv://fixItGroup3:sellItGroup3@cluster0.omcrx.mongodb.net/?retryWrites=true&w=majority";
 //mongodb+srv://aruna:midterm@carscluster0.juzdiob.mongodb.net/carCollection
// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}