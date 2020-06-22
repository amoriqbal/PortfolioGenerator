const mongoose=require('mongoose')


const achSchema=new mongoose.Schema({
    description:{type:String, default:"MyAchievement"},
    date:{type:Date, default:new Date(1,1,1,0,0,0,0)}
})

module.exports= mongoose.model('achievement',achSchema)
