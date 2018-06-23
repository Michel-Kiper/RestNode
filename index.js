'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const port = config.port

app.listen(3000, () => {
    console.log(`Corriendo en el puerto ${port}`)
})

mongoose.connect(config.db,(err,res) => {
    if(err) {
        console.log(`Ocurrio el siguinete error ${err}`)
    }
    console.log("Conexion establecida.....")  
})





