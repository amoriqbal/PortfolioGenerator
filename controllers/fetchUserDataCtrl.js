const userModel=require("../models/user").model

const fetchUser=async (user)=>{
    try{
        var user_db
        if(!user){
            throw new Error("user undefined")
        }
        if(user.email)
            user_db=await userModel.findOne({email:user.email})
        else if(user.uname)
            user_db=await userModel.findOne({uname:user.uname})
        else throw new Error("No username or email found")

        
        return user_db
    } catch(error){
        console.log(error)
        throw error
    }
    
}

module.exports={
    fetchUser
}