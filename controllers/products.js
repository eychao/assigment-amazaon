const express = require('express')
const router = express.Router();

const productModel = require("../model/product");

//Route for the Products Page
router.get("/",(req,res)=>{
    res.render("products",{
        title:"Products",
        headingInfo: "Products",
        productsPage: productModel.getAllProducts()
    });   
});

module.exports = router;