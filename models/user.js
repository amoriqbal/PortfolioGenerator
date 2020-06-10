const mongoose=require('mongoose')
const meta=require('./meta')
const userSchema= new mongoose.Schema({
    email:String,
    pass:String,
    meta:{type:mongoose.Types.ObjectId,ref:'meta'}
})

module.exports=mongoose.model('user',userSchema);