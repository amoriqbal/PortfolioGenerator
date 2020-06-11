const mongoose=require('mongoose')
const meta=require('./meta')
const adminConn=require('../adminMongoConn')

const userSchema= new mongoose.Schema({
    email:String,
    pass:String,
    meta:{type:mongoose.Types.ObjectId,ref:'meta'}
})

const model=adminConn.model('user',userSchema);

function defaultValue(){
    return new model({
        email:"",
        pass:"",
        meta:meta.defaultValue()
    })
}

module.exports={
    model,
    defaultValue
}