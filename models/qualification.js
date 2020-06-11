const mongoose=require('mongoose')
const adminConn=require('../adminMongoConn')

const qualificationSchema= new mongoose.Schema({
    name:String,
    field:String,
    startDate:Date,
    endDate:Date,
    grade:String
})

module.exports=adminConn.model('qualification',qualificationSchema)