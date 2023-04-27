const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const authentication = (req,res,next)=>{
    const token = req.headers.authorization
    console.log(token);

    if(!token){
        return res.status(401).json({ message: "User not found" })
    }
    if(token){
        const decoded = jwt.verify(token, process.env.key);
        console.log(decoded);
        if(decoded){
            req.body.userID = decoded.userID;
    next()
        }else{
            res.send('Please login first')
        }

    }else{
        res.send('Please login first')
    }
    
}

module.exports= {authentication}