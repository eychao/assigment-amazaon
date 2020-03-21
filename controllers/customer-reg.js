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
    //error messages variables
    const errorMsgs = [];
    const errorName = [];
    const errorEmail = [];
    const errorPass = [];
    const errorPass2 = [];
    
    //user input values
    const nameUser = req.body.Name;
    const emailUser = req.body.Email;
    const passUser = req.body.Pass;
    const pass2User = req.body.Pass2;
    
    //Validation Not Null
    if(nameUser == ""){
        errorName.push("* You must enter your name");
        errorMsgs.push("* You must enter your name");
    }   
    if(emailUser == ""){
        errorEmail.push("* You must enter your email");
        errorMsgs.push("* You must enter your email");
    }    
    if (passUser == ""){
        errorPass.push("* You must enter your password");
        errorMsgs.push("* You must enter your password");        
    }
    //password are character and numbers
    const numLetter = /^[0-9a-zA-Z]+$/;
    if(!passUser.match(numLetter))
    {
        errorPass.push("* You must enter numbers and letters only");
        errorMsgs.push("* You must enter numbers and letters only");
    }
    //password length is 6-12
    if(passUser.length <=5 || passUser.length >=13 )
        {
                errorPass.push("* Password needs to be 6-12 characters");
                errorMsgs.push("* Password needs to be 6-12 characters");
        }
    if (pass2User == ""){
        errorPass2.push("* You must enter your password");
        errorMsgs.push("* You must enter your password");
    }
    if(passUser != pass2User){
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
            pass2Error: errorPass2,
            //User Input
            Name: nameUser,
            Email: emailUser,
            Password: passUser,
            Password2: pass2User
        });
    }
    
    //All user inputs valid
    else{
        //const sgMail = require('@sendgrid/mail');
        res.render("customer",{
            title:"Customer",
            headingInfo: "Customer Registration",
            acceptedInput: 'Registration Successful! You will receive an email from us.'
            //send email
            /*sgMail.setApiKey(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);
            const msg = {
            to: 'test@example.com',
            from: 'test@example.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };
            sgMail.send(msg);*/
        });
    }

});  /*TESTING COMMIT*/

module.exports = router;