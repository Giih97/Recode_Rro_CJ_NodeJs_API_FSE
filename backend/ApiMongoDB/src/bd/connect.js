const mongoose = require('mongoose')

function connect(){
    mongoose.
    connect("mongodb://localhost/fstack", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("conectado")
    })
    .catch((error)=>{
        console.log(`erro na conexao ${error}`)
    })
}

module.exports=connect()