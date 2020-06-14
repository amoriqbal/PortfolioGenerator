const {fetchUser} = require('../controllers/fetchUserDataCtrl')
const Router = require('express').Router()

Router.get('/fetchuserdata/:uname',async (req,res)=>{
    try{    
        var uname = req.params.uname
        var userData = await fetchUser({uname})
        if(!userData){
            res.status(500).send({error:"user not found in db"})
        } else {
            res.json(userData)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports=Router