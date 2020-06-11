const mongoose=require('mongoose')
const adminConn=require('../adminMongoConn')

const achSchema=new mongoose.Schema({
    description:String,
    date:Date
})

module.exports= adminConn.model('achievement',achSchema)
