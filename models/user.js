const mongoose=require('mongoose')
const meta=require('./meta')

const userSchema= new mongoose.Schema({
    uname:{type:String, default:"anonymous"},
    email:{type:String, default:"anonymous@something.com"},
    pass:{type:String, default:"password"},
    meta:{type:mongoose.Types.ObjectId,ref:'meta'}// add default value. default:new mongoose.Types.ObjectId(0) 
})

const model=mongoose.model('user',userSchema);

module.exports=model