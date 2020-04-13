const express = require('express')
const router = express.Router();
const productModel = require("../model/product"); 

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
    .then(()=>{
        res.redirect("/task/list")
    })
    .catch(err=>console.log('Error happened when inserting in the database: ${err}'));
});

router.get("/list",(req,res)=>{         //Route to get all product list
    res.render("task/taskDashboard");
});

router.get("/description",(req,res)=>{

});


module.exports = router;