const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    first:{
        type:String,
        unique:true
    },
    last:{
        type:String
    },
    email:{
        type:String
    },
    job:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    date:{
        type:Date
    },
    pincode:{
        type:Number
    },
    age:{
        type:Number
    }
});

const Chat=mongoose.model("Chat",chatSchema);

module.exports = Chat;