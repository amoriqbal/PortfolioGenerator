const Router = require('express').Router()
const homeRoute=require('./home')

Router.use('/',homeRoute)
Router.use('/api',require('./setUserData'))
Router.use('/api',require('./fetchUserData'))
Router.use('/api/auth',require('./auth'))

module.exports=Router