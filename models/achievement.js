const mongoose=require('mongoose')


const achSchema=new mongoose.Schema({
    description:String,
    date:Date
})

module.exports= mongoose.model('achievement',achSchema)
