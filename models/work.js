const mongoose=require('mongoose');

const workSchema=mongoose.Schema({
    description:String,
    startDate:Date,
    endDate:Date,
    institution:String
})

module.exports=mongoose.model('work',workSchema)