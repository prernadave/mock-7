const express = require('express')
const { UserModel } = require('../models/user.model')
const signup = express.Router()
const bcrypt = require('bcrypt')


signup.post('/signup', async(req,res)=>{
const {Name,Email, Password} = req.body;
try {
    const hashed = await bcrypt.hash(Password, 10)
    const user = new UserModel({Name,Email,Password:hashed})
    await user.save()
    console.log(user);
    res.status(201).json({message:"User Created successfully"})
} catch (error) {
    console.log(error);
    res.status(500).json({message:"Can not create user"})
}
})

module.exports={signup}