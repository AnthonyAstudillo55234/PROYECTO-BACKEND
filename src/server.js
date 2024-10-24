// Requerir modulos
// ESMODULES
import express from 'express'

import router from './routers/tour_routes.js'

// COMMONJS
//const express = require('express')

// INICIALIZACIONES

const app = express()

// VARIABLES
app.set('port', process.env.port || 300)

// MIDDLEWARE

app.use(express.json())

// RUTA PRINCIPAL

app.get('/',(req,res)=>{
    res.send("OK")
})

// RUTAS PARA EL TOUR

app.use('/api',router)

// RUTAS PARA EL USER

// RUTAS PARA EL BOOKING

// EXPORTAR LA INSTANCIA DE APP

export default app 
