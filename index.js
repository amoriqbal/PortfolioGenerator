const express = require('express')
const config = require('./config/config')
const mongoose=require('mongoose')
const routes=require('./routes/allRoutes')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport=require('passport')
require('./services/passport')
try{
mongoose.connect(config.mongodbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
} catch(error) {
    console.log("mongo conn error",error)
    throw error
}
const app=express()
app.use(cookieSession({
    keys:[config.sessionKey],
    maxAge:24*60*60*1000
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

app.use('/api/public',express.static('public'))
app.use('/',express.static('PortfolioGeneratorClient/build'))
app.use(routes)
app.listen(config.port,(error)=>{
    if(error){
        console.log(error)
    } else {
        console.log("Backend running on port ", config.port)
    }
})

