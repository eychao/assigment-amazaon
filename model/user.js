const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    price: Schema.Types.Decimal128,
    status: {
        type: String,
        default: "customer"
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }

});