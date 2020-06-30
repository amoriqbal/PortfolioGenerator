const mongoose=require('mongoose')
const meta=require('./meta')

/*const authTypes={
    auth:
}
const authValidator=(v)=>{
    if(!v){
        return false;
    }
    if(Object.keys(v).length===0){
        return false;
    }

    k=Object.keys(v)
    for(var i=0;i<k.length;i++){
        for()
    }
}*/

const userSchema= new mongoose.Schema({
    uname:{type:String, default:"anonymous"},
    emails:[String],
    googleId:String,
    meta:{type:mongoose.Types.ObjectId,ref:'meta',default:null}// add default value. default:new mongoose.Types.ObjectId(0) 
})

const model=mongoose.model('user',userSchema);

module.exports=model
module.exports.localAuth