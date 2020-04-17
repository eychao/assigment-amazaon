const express = require('express')
const router = express.Router();
const productModel = require("../model/product"); 
const moment = require('moment');
const path = require("path"); //core package of node, no need to install (not 3rd party package)

router.get("/add",(req,res)=>{          //Route to Add Product Form
    res.render("task/productAdd")
});

router.post("/add",(req,res)=>{
    //insert into MongoDB database
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        bestseller: req.body.bestseller,
        img: req.body.img
    }
    const task = new productModel(newProduct); //create document to insert to database
    task.save()
    .then((task)=>{
        req.files.img.name = `product_img_${task._id}${req.files.img.name}${path.parse(req.files.img.name).ext}`;
        req.files.img.mv(`public/img/${req.files.img.name}`) //move img to folder
        .then(()=>{
            productModel.updateOne({_id:task._id},{ //update product image
                img: req.files.img.name
            })
            .then(()=>{
                res.redirect("/task/list");
            })
        })       
    })
    .catch(err=>console.log(`Error happened when inserting in the database: ${err}`));
});

router.get("/list",(req,res)=>{         //Route to get all product list
    //pull from database, get products 
    //inject products into productDashboard
    productModel.find()    //pull only status: "open" documents -->productModel.find({status:"Open"})
    .then((products)=>{
        const selectedProducts = products.map(product=>{
            const dateCreated = moment(product.dateCreated).format('MMMM Do YYYY, h:mm:ss a'); //format date and time with moment.js
            return{             // inject to Dashboard
                //wanted to filtered you wanted to the /task/productDashboard
                id: product._id,
                img: product.img,
                name: product.name,
                price: product.price,
                description: product.description,
                category: product.category,
                quantity: product.quantity,
                dateCreated: dateCreated
            }
        });
        res.render("task/productDashboard",{    //Filter out info wanted returned into new array
            productData: selectedProducts       //display each product data in productDashboard
        });
    })
    .catch(err=>console.log(`Error happened when pulling from the database: ${err}`));
});

router.get("/description",(req,res)=>{

});


module.exports = router;