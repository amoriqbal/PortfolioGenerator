const mongoose=require('mongoose');

const workSchema=mongoose.Schema({
    description:String,
    startDate:Date,
    endDate:Date,
})

module.exports=mongoose.model('work',workSchema)