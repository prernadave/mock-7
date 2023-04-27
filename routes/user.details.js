const express = require('express')
const { UserModel } = require('../models/user.model')
const detail= express.Router()

detail.get('/getProfile', async (req,res)=>{
const Idbody = req.body.userID
console.log(Idbody);
  try {
    const user = await UserModel.find({userID: Idbody})
    // console.log(user);
    res.send(user)
  } catch (error) {
    console.log(error);
  }
})

module.exports= {detail}