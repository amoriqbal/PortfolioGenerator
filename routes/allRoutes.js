const Router = require('express').Router()
const homeRoute=require('./home')

Router.use(homeRoute)



module.exports=Router