const Router=require('express').Router()
const {insertNewUser, updateUserData}=require('../controllers/userDataCtrl')

Router.post("/insertuser", async (req,res)=>{
    //res.send("hi")
    try{
        const user=req.body.user
        await insertNewUser(user)
        res.sendStatus(200)
    } catch (error){
        console.log("Error inserting new user")
        res.status(400).send({error:error.message})
    }
})

Router.post("/updateuserdata", async (req,res)=>{
    try{
        await updateUserData(req.body.user,req.body.meta)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error.message})
    }
})
module.exports = Router