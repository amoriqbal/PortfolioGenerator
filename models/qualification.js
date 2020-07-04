const mongoose=require('mongoose')

const qualificationSchema= new mongoose.Schema({
    name:String,
    field:String,
    startDate:Date,
    endDate:Date,
    grade:String,
    institution:String
})

module.exports=mongoose.model('qualification',qualificationSchema)