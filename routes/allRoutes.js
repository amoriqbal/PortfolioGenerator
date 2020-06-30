const Router = require('express').Router()

Router.use('/api',require('./setUserData'))
Router.use('/api',require('./fetchUserData'))
Router.use('/api/auth',require('./auth'))

module.exports=Router