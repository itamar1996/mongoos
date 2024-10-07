const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true,"username required"],
        minlength:[5,"too short"]
    },
    password:{
        type: String,
        required: [true,"password required"]
    },
    role:{
        type: String,
        enum: ["soldier","comander"]
    },
    area:{
        type:String,
        enum:["center","north","south","west","east"],
        required: [true,"area required"]
    },
    units:{
        type:[Number],
        required: [true,"units required"]
    }
    
})

const UserModel = mongoose.model('user',userSchema)
module.exports = UserModel;