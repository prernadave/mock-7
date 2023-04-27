const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Profilepicture: String,
    Name: String,
    Bio: String,
    Phone: String,
    Email: String,
    Password: String,
})

const UserModel = mongoose.model('user', userSchema)
module.exports= {UserModel}