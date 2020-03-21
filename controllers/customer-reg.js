const express = require('express')
const router = express.Router();

//Route for the Registration Page
router.get("/",(req,res)=>{

    res.render("customer",{
        title:"Customer",
        headingInfo: "Customer Registration"

    });
});

//Registration Page Post Data
router.post("/registration",(req,res)=>{
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

module.exports = router;