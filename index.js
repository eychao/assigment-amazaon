const express = require("express"); 
const app = express();
const exphbs= require("express-handlebars");
const bodyParser = require('body-parser'); //bodyParser

const productModel = require("./model/product");
const productCat = require("./model/productCat");
const productBS = require("./model/bestseller");


app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false })); //bodyParser
app.use(express.static("public"));

//Route for the Home Page
app.get("/",(req,res)=>{   
    res.render("index",{
        title:"Home",
        headingInfo: "Home Page",
        productsCat :productCat.getProductsCat(),
        productBS :productBS.getBestseller()
    });

});
//Route for the Registration Page
app.get("/customer-reg",(req,res)=>{

    res.render("customer",{
        title:"Customer",
        headingInfo: "Customer Registration"

    });
});
//Registration Page Post Data
app.post("/customer",(req,res)=>{
    const errorMsgs = [];
    const errorName = [];
    const errorEmail = [];
    const errorPass = [];
    const errorPass2 = [];
    
    //Validation Not Null
    if(req.body.Name == ""){
        errorName.push("* You must enter your name");
        errorMsgs.push("* You must enter your name");
    }   
    if(req.body.Email == ""){
        errorEmail.push("* You must enter your email");
        errorMsgs.push("* You must enter your email");
    }    
    if (req.body.Pass == ""){
        errorPass.push("* You must enter your password");
        errorMsgs.push("* You must enter your password");        
    }
    //password are character and numbers
    const numLetter = /^[0-9a-zA-Z]+$/;
    if(!req.body.Pass.match(numLetter))
    {
        errorPass.push("* You must enter numbers and letters only");
        errorMsgs.push("* You must enter numbers and letters only");
    }
    //password length is 6-12
    if(req.body.Pass.length <=5 || req.body.Pass.length >=13 )
        {
                errorPass.push("* Password needs to be 6-12 characters");
                errorMsgs.push("* Password needs to be 6-12 characters");
        }
    if (req.body.Pass2 == ""){
        errorPass2.push("* You must enter your password");
        errorMsgs.push("* You must enter your password");
    }
    if(req.body.Pass != req.body.Pass2){
        errorPass2.push("* Password does not match. Try again.");
        errorMsgs.push("* Password does not match. Try again.");
    }
    
    //If user did not enter all information
    if(errorMsgs.length >0){
        
        res.render("customer",{
            title:"Customer",
            headingInfo: "Customer Registration", 
            nameError: errorName,           
            emailError: errorEmail,
            passError: errorPass,
            pass2Error: errorPass2              
        });
    }
    
    //All user inputs valid
    else{
        res.render("customer",{
            title:"Customer",
            headingInfo: "Customer Registration",
            acceptedInput: 'Registration Successful! You will receive an email from us.'
        });
    }

});  /*TESTING COMMIT*/

//Route for the Login Page
app.get("/login",(req,res)=>{
    res.render("login",{
        title:"Login",
        headingInfo: "Login"
    })
});

//Login Page Post Data
app.post("/login",(req,res)=>{
    const errorMsgs = [];
    const errorEmail = [];
    const errorPass = [];
    
    //Validation Not Null
    if(req.body.Email == ""){
        errorEmail.push("* You must enter your email");
        errorMsgs.push("* You must enter your email");
    }    
    if (req.body.Pass == ""){
        errorPass.push("* You must enter your password");
        errorMsgs.push("* You must enter your password");
    }
    
    //If user did not enter all information
    if(errorMsgs.length >0){
        const userEmail =req.body.Email;
        res.render("login",{
            title:"Login",
            headingInfo: "Login",
            emailError: errorEmail,
            Email: userEmail,
            passError: errorPass           
        });
    }
    
    //All user inputs valid
    else{
        res.render("login",{
            title:"Login",
            headingInfo: "Login",
            acceptedInput: 'Welcome Back!'
        });
    }
});
//Route for the Products Page
app.get("/products",(req,res)=>{
    res.render("products",{
        title:"Products",
        headingInfo: "Products",
        productsPage: productModel.getAllProducts()
    });   
});

const PORT=3100;
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});