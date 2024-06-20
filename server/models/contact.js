const mongoose = require('mongoose')

const ContactSchema=new mongoose.Schema({
    id: String,
    name: String, 
    phone: String, 
    email: String, 
})


module.exports=mongoose.model('contactsList',ContactSchema)