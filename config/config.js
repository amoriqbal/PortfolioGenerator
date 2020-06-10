if(process.env.NODE_ENV=="PRODUCTION"){
    module.exports=require('./prod.js');
} else {
    module.exports=require('./dev.js');
}