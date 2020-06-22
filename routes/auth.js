const { Router } = require('express')


Router().get('/google',(req,res)=>{

})

Router().get('/google/callback',(req,res)=>{

})

Router().get('/logout',(req,res)=>{
    req.session=null
})

module.exports = Router