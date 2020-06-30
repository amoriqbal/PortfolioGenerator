const userModel=require('../models/user')

module.exports=async function(req,res,next){
    var user_db
    try{
        if(!user){
            throw new Error("user undefined")
        }
        if(user.googleId){
            user_db=await userModel.findOne({googleId:user.googleId})
        }
        else if(user.uname)
            user_db=await userModel.findOne({uname:user.uname})
        else throw new Error("No username or email found")

        if(user_db && user_db.uname){
            return next()
        } else {
            res.send(500).send({error:"Not found in our database"})
        }
    } catch (e) {
        res.status(500).send({error:e.message})
    }
}