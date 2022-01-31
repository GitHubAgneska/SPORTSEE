const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()

app.use(express.json())
app.use(cors())


const userRoutes =require('./routes');
// Use Routes
app.use('/api/user', userRoutes)


// Serve the static if in production
if ( process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build/'))
    // any other request than '/api/' => load 'index.html'
    app.get('*', (_, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))})

}

app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})