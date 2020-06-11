const Router = require('express').Router()
const homeRoute=require('./home')

Router.use('/',homeRoute)
Router.use('/api',require('./userData'))


module.exports=Router