const mongoose=require('mongoose')

const achSchema=new mongoose.Schema({
    description:String,
    date:Date
})