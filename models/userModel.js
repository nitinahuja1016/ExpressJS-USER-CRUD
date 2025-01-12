const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    // id:{
    //     type : String,
    //     required : [true, "Please add the user name"]
    // },
    name:{
        type : String,
        required : [true, "Please add the user name"]
    },
    email :{
        type : String,
        required : [true, "Please add the user email"]
    }
})

module.exports = mongoose.model("Users", userSchema)