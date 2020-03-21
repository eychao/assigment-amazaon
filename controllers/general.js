const express = require('express')
const router = express.Router();

const productCat = require("../model/productCat");
const productBS = require("../model/bestseller");

//Route for the Home Page
router.get("/",(req,res)=>{   
    res.render("index",{
        title:"Home",
        headingInfo: "Home Page",
        productsCat :productCat.getProductsCat(),
        productBS :productBS.getBestseller()
    });

});


module.exports = router;