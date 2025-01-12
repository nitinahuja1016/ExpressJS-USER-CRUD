const expressAsyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
const getUsers = expressAsyncHandler(async (req, res)=>{
    const users = await Users.find();
    res.status(200).json(users);
})

const createUser =expressAsyncHandler( async (req, res)=>{
    const {name, email} = req.body;
    if( !name || !email){
        res.status(400);
        throw new Error("All the fields are mandatory");   
    }
    const user = await Users.create({
         name, email
    })

    res.status(201).json(user);
})

const getUser = expressAsyncHandler(async (req, res)=>{
    const user = await Users.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error("User not found");
    }
    res.status(200).json(user);
})

const updateUser =expressAsyncHandler( async (req, res)=>{
    const user = await Users.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error("User not found");
    }

    const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.status(200).json(updatedUser);
})

const deleteUser =expressAsyncHandler( async (req, res)=>{
    const user = await Users.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error("User not found");
    }
    // console.log("Before removing the user is ",user)
    await Users.findByIdAndDelete(req.params.id);
    // console.log("After removing the user is ",user)
    res.status(200).json(user);
})

module.exports = {getUsers,createUser,getUser, updateUser,deleteUser    };