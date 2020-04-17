const express = require("express");
const exphbs= require("express-handlebars");
const bodyParser = require('body-parser'); //bodyParser
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload'); //to upload file image

require('dotenv').config({path:"./config/keys.env"}); //load environment variable file

const app = express();
app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false })); //bodyParser
app.use(express.static("public"));

//load controllers
const generalController = require("./controllers/general");
const productsController = require("./controllers/products");
const registrationController = require("./controllers/customer-reg");
const loginController = require("./controllers/login");
const taskController = require("./controllers/task");

app.use(fileUpload());

//map each controller to app object
app.use("/",generalController);
app.use("/products",productsController);
app.use("/customer-reg",registrationController);
app.use("/login",loginController);
app.use("/task",taskController);

mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to MongoDB Database');
})
.catch(err=>console.log(`Connection Error to MongoDB Database ${err}`));

//set up server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});