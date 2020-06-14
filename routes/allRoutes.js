const Router = require('express').Router()
const homeRoute=require('./home')

Router.use('/',homeRoute)
Router.use('/api',require('./setUserData'))
Router.use('/api',require('./fetchUserData'))

module.exports=Router