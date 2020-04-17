const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

const userModel = mongoose.model('User', userSchema);   //User--> is named "users" in database
module.exports = userModel;