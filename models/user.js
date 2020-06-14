const mongoose=require('mongoose')
const meta=require('./meta')

const userSchema= new mongoose.Schema({
    uname:String,
    email:String,
    pass:String,
    meta:{type:mongoose.Types.ObjectId,ref:'meta'}
})

const model=mongoose.model('user',userSchema);

function defaultValue(){
    return new model({
        uname:"",
        email:"",
        pass:"",
        meta:meta.defaultValue()
    })
}

module.exports={
    model,
    defaultValue
}