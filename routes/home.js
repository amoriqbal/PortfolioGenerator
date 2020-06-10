Router=require('express').Router()

Router.get('/',(req,res)=>{
    res.send("home")
})

module.exports=Router