const mongoose = require('mongoose')
const config=require('./config/config')

const adminConn = async ()=>{
    try{
        await mongoose.createConnection(config.mongodbURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

/*.catch((error)=>{
    if(error){
        console.log("Mongo conn Error",error)
    } else {
        console.log("Admin mongodb connection successful")
    }
})*/

module.exports=adminConn