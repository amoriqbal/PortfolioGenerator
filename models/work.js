const mongoose=require('mongoose');
const adminConn=require('../adminMongoConn')

const workSchema=mongoose.Schema({
    description:String,
    startDate:Date,
    endDate:Date,
})

module.exports=adminConn.model('work',workSchema)