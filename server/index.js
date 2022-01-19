// create package.json
// import express




const express = require('express')
const bodyParser = require('body-parser')
const ordersRouter = require('./ordersRouter');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
postgress.connect("mongodb://localhost/DB_NAME", { useNewUrlParser: true })

// app.use(ordersRouter)


const port = 3000
app.listen(port, function() {console.log('Running server on port '+port)})