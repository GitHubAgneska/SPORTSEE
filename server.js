const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')
const router = require('./routes')
const favicon = require('serve-favicon')
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(router)

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// app.use(favicon(__dirname + '/client/public/favicon.ico'));
//app.use(express.static('client/public/')) // DEV
// app.use(express.static(__dirname + '/public'));

//app.use(express.static('client/build/')) 
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build'))); // PROD


app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})