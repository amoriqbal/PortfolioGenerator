const userModel=require('../models/user')
const mongoose=require('mongoose')
const updateMetadata = (user,metadata,replace=false)=>{
    
}

const insertNewUser = async (user)=>{
    /*try{
        var userFromDb=await userModel.model.find({email:user.email})
        console.log("reached1")
    }catch(x){
        console.log("Error in fetching data from db\n")
        throw x
    }
    if(userFromDb.length!==0){
        throw new Error("This user is already registered")
    }*/
    try{
    var userDoc=userModel.defaultValue()
    userDoc=await Object.assign(userDoc,user)
    await userDoc.save()
    }catch(x){
        console.log("Error in saving userdata\n")
        throw x
    }
    resolve(userDoc);
}

module.exports={
    insertNewUser,
    updateMetadata
}