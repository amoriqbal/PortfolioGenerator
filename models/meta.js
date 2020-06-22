const mongoose=require('mongoose')
const qualification=require('./qualification')
const work = require('./work')
const achievement=require('./achievement')

const metaScahema=mongoose.Schema({
    template:{type:String,default:"TEMPLATE_BASE"},
    name:{type:String,default:"anonymous"},
    qualifications:[{type:mongoose.Types.ObjectId,ref:'qualification'}],
    achievements:[{type:mongoose.Types.ObjectId,ref:'achievement'}],
    works:[{type:mongoose.Types.ObjectId,ref:'work'}],
    photoURI:{type:String, default:"/public/default_user_image.jpg"}
})

const model=mongoose.model('meta',metaScahema)
module.exports=model
/*function defaultValue(){
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
}*/