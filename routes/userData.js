const Router=require('express').Router()
const {insertNewUser}=require('../controllers/userDataCtrl')

Router.post("/insertuser", async (req,res)=>{
    //res.send("hi")
    try{
        const user=req.body.user
        console.log(req.body)
        await insertNewUser(user)
        res.send(200)
    } catch(x){
        console.log("Error inserting new user")
        res.status(400).send({error:x.message})
    }
})

module.exports = Router