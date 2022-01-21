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

// Handle custom routes
app.use('/api/', require('./routes'))

// Serve the static files from the React app
//app.use(express.static('client/public/')) // DEV
app.use(express.static(path.join(__dirname, '/client/build/'))); // PROD

app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})