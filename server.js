const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')
const router = require('./routes')


app.use(cors())
app.use(router)
// app.use(express.static('client/build')) // prod


// prod: resolve any address with built index.html (where spa root lives)
// app.get('/*', (_, res) => { res.sendFile(path.join(__dirname, './client/build/index.html'))})

app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})