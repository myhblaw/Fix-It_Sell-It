// create a reference to the model
// File Name: Prod.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: Prod Applcation
let ProdModel = require('../models/prod');

// Gets all Prods from the Database and renders the page to list them all.
module.exports.prodList = function(req, res, next) {  
    ProdModel.find((err, ProdsList) => {
        //console.log(ProdList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('products/list', {
                title: 'Products List', 
                ProdList: ProdsList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}


// Gets a Prod by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    ProdModel.findById(id, (err, ProdToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('products/details', {
                title: 'Product Details', 
                Prod: ProdToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE    
    let newProd = ProdModel();

    res.render('products/add_edit', {
        title: 'Add a New Product to sell',
        Prod: newProd
    })        

}

// Processes the data submitted from the Add form to create a new Prod
module.exports.processAddPage = (req, res, next) => {

    // ADD YOUR CODE HERE
    let newProd = ProdModel({

          
        _id: req.body.id,
        productname: req.body.productname,
        productdescription: req.body.productdescription,
        condition: req.body.condition,
        sellername: req.body.sellername,
        
        color: req.body.color,
        price: req.body.price  
    });

    ProdModel.create(newProd, (err, Prod) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(Prod);
            res.redirect('/products/list');
        }
    });


}

// Gets a Prod by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {

    // ADD YOUR CODE HERE
    let id = req.params.id;

    ProdModel.findById(id, (err, ProdToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('products/add_edit', {
                title: 'Edit Prod', 
                Prod: ProdToEdit
            })
        }
    });

}

// Processes the data submitted from the Edit form to update a Prod
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id

    let updatedProd = ProdModel({
        _id: req.body.id,
        productname: req.body.productname,
        productdescription: req.body.productdescription,
        condition: req.body.condition,
        sellername: req.body.sellername,
        
        color: req.body.color,
        price: req.body.price 
    });

    // console.log(updatedItem);

    ProdModel.updateOne({_id: id}, updatedProd, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/products/list');
        }
    });
    
}

// Deletes a Prod based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    ProdModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/products/list');
        }
    });
}