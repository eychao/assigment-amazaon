const express = require("express"); 
const app = express();
const exphbs= require("express-handlebars");
const bodyParser = require('body-parser'); //bodyParser

app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false })); //bodyParser
app.use(express.static("public"));

//load controllers
const generalController = require("./controllers/general");
const productsController = require("./controllers/products");
const registrationController = require("./controllers/customer-reg");
const loginController = require("./controllers/login");

//map each controller to app object
app.use("/",generalController);
app.use("/products",productsController);
app.use("/customer-reg",registrationController);
app.use("/login",loginController);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});