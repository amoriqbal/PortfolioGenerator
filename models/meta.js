const mongoose=require('mongoose')
const qualification=require('./qualification')
const achievement=reuire('./achievement')


const metaScahema=mongoose.Schema({
    name:String,
    qualifications:[{type:mongoose.Types.ObjectId,ref:'qualification'}],
    achievements:[{type:mongoose.Types.ObjectId,ref:'achievement'}],
    works:[{type:mongoose.Types.ObjectId,ref:'work'}],
    photoURI:String
})

module.exports=mongoose.model('meta',metaScahema)