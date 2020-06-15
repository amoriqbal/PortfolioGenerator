const mongoose=require('mongoose')
const qualification=require('./qualification')
const work = require('./work')
const achievement=require('./achievement')

const metaScahema=mongoose.Schema({
    template:String,
    name:String,
    qualifications:[{type:mongoose.Types.ObjectId,ref:'qualification'}],
    achievements:[{type:mongoose.Types.ObjectId,ref:'achievement'}],
    works:[{type:mongoose.Types.ObjectId,ref:'work'}],
    photoURI:String
})

const model=mongoose.model('meta',metaScahema)

function defaultValue(){
    return new model({
        template:"TemplateBase",
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