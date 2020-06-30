const userModel=require('../models/user')
const metaModel=require('../models/meta')
const achModel=require('../models/achievement')
const workModel=require('../models/work')
const qualModel=require('../models/qualification')
const mongoose=require('mongoose')
const updateUserData = async (user,metadata)=>{
    try{
        var user_db=await userModel.findOne({uname:user.uname})
        if(!user_db){
            throw new Error("user not in database")
        }

        if(metadata){
            var m=await metaModel.findById(new mongoose.Types.ObjectId(user_db.meta))
            if(!m){
                m=new metaModel();
                m.name=metadata.name || m.name
                m.photoURI=metadata.photoURI || m.photoURI
            }
            if(metadata.name)
                m.name=metadata.name

            if(metadata.photoURI)
                m.photoURI=metadata.photoURI

            if(metadata.qualifications){
                for(var i =0;i< m.qualifications.length;i++){
                    var q=await qualModel.findById(new mongoose.Types.ObjectId(m.qualifications[i]))
                    await q.remove()
                }
                m.qualifications=[]
                for(var i =0;i< metadata.qualifications.length;i++){
                    var q=await (new qualModel(metadata.qualifications[i])).save()
                    m.qualifications.push(mongoose.Types.ObjectId(q.id))
                }
            }
            
            
            if(metadata.works){
                for(var i =0;i< m.works.length;i++){
                    var q=await workModel.findById(new mongoose.Types.ObjectId(m.works[i]))
                    await q.remove()
                }
                m.works=[]
                for(var i =0;i<metadata.works.length;i++){
                    var q=await (new workModel(metadata.works[i])).save()
                    m.works.push(mongoose.Types.ObjectId(q.id))
                }
            }

            if(metadata.achievements){
                for(var i =0;i< m.achievements.length;i++){
                    var q=await achModel.findById(new mongoose.Types.ObjectId(m.achievements[i]))
                    await q.remove()
                }
                m.achievements=[]
                for(var i =0;i<metadata.achievements.length;i++){
                    
                    var q=new achModel(metadata.achievements[i])
                    var saved=await q.save()
                    console.log("DESCRIPTION::",q.description)
                    console.log("SAVED ID::",saved.id)
                    m.achievements.push(new mongoose.Types.ObjectId(saved.id))
                }
            }
            m= await m.save()
            user_db.meta=new mongoose.Types.ObjectId(m.id)
            await user_db.save()
        }
        return user_db
    } catch(error){
        console.log(error)
        throw error;
    }
}

/*const insertNewUser = async (user)=>{
    try{
        var userFromDb=await userModel.find({email:user.email})
        if(!userFromDb){
            userFromDb=await userModel.find({uname:user.uname})
        }
        console.log("reached1")
    }catch(x){
        console.log("Error in fetching data from db\n")
        throw x
    }
    if(userFromDb.length!==0){
        throw new Error("This user is already registered")
    }
    try{
    var userDoc=new userModel()
    userDoc=await Object.assign(userDoc,user)
    return await userDoc.save()
    }catch(x){
        console.log("Error in saving userdata\n")
        throw x
    }
}*/


module.exports={
    //insertNewUser,
    updateUserData
}