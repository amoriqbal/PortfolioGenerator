const express = require('express')
const config = require('./config/config')
const mongoose=require('mongoose')
const routes=require('./routes/allRoutes')
const bodyParser = require('body-parser')

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

app.use(bodyParser.json())

app.use(routes)
app.listen(config.port,(error)=>{
    if(error){
        console.log(error)
    } else {
        console.log("Backend running on port ", config.port)
    }
})

