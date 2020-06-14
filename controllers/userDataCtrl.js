const userModel=require('../models/user')
const metaModel=require('../models/meta')
const achModel=require('../models/achievement')
const workModel=require('../models/work')
const qualModel=require('../models/qualification')
const mongoose=require('mongoose')
const meta = require('../models/meta')
const updateUserData = async (user,metadata,replace=false)=>{
    try{
        var user_db=await userModel.findOne({email:user.email})
        if(!user_db){
            throw new Error("user not in database")
        }

        if(metadata){
            var m=new metaModel(metadata)

            meta.name=metadata.name || "Mr. Unknown"

            if(metadata.qualifications){
                foreach (i in metadata.qualifications);{
                    var q=new qualModel(metadata.qualifications[i]).save()
                    m.qualifications+=mongoose.Types.ObjectId(q.id)
                }
            }
            
            if(metadata.works){
                foreach (i in metadata.works);{
                    var q=new workModel(metadata.works[i]).save()
                    m.works+=mongoose.Types.ObjectId(q.id)
                }
            }

            if(metadata.achievements){
                foreach (i in metadata.achievements);{
                    var q=new achModel(metadata.achievements[i]).save()
                    m.achievements+= mongoose.Types.ObjectId(q.id)
                }
            }
            m.save()
        }
        
    } catch(error){
        console.log(error)
        throw error;
    }
}

const insertNewUser = async (user)=>{
    try{
        var userFromDb=await userModel.model.find({email:user.email})
        console.log("reached1")
    }catch(x){
        console.log("Error in fetching data from db\n")
        throw x
    }
    if(userFromDb.length!==0){
        throw new Error("This user is already registered")
    }
    try{
    var userDoc=userModel.defaultValue()
    userDoc=await Object.assign(userDoc,user)
    return await userDoc.save()
    }catch(x){
        console.log("Error in saving userdata\n")
        throw x
    }
}


module.exports={
    insertNewUser,
    updateMetadata
}