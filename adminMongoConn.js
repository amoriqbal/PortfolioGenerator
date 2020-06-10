const mongoose = require('mongoose')
const config=require('./config/config')

const adminConn = mongoose.createConnection(config.mongodbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch((error)=>{
    if(error){
        console.log(error)
    } else {
        console.log("Admin mongodb connection successful")
    }
})