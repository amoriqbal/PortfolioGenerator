const mongoose=require('mongoose')
const qualification=require('./qualification')
const work = require('./work')
const achievement=require('./achievement')
const adminConn=require('../adminMongoConn')

const metaScahema=mongoose.Schema({
    name:String,
    qualifications:[{type:mongoose.Types.ObjectId,ref:'qualification'}],
    achievements:[{type:mongoose.Types.ObjectId,ref:'achievement'}],
    works:[{type:mongoose.Types.ObjectId,ref:'work'}],
    photoURI:String
})

const model=adminConn.model('meta',metaScahema)

function defaultValue(){
    return new model({
        name:"Mr.Unknown",
        qualifications:[],
        achievements:[],
        works:[],
        photoURI:"default photo uri"
    })
}
module.exports={
    model,
    defaultValue
}