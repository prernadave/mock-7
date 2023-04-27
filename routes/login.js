const express = require('express')
const { UserModel } = require('../models/user.model')
const login = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


login.post("/login", async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const user = await UserModel.findOne({ Email })
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        if(user){
            bcrypt.compare(Password, user.Password, async(err,result)=>{
                if(result){
                    const token = jwt.sign({userID:user._id , userName:user.Name} , process.env.key, { expiresIn: "2h" })
                    console.log(token);
                    res.send({message:"Login Successfully", token:token})
                }else{
                    res.send({message:"Please Login Again"})
                }
            });
        }

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Can not login at this moment" })
    }
})

module.exports= {login}