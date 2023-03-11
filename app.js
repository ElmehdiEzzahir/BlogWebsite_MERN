require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const connection = require('./connection/connection')
const router = require('./routes/postRouters')
const app = express()

const PORT = process.env.PORT || 8080

// MONGO_URI = "mongodb+srv://mehdi:damorix123@cluster0.tueyt9k.mongodb.net/?retryWrites=true&w=majority"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.get('/', (req, res) => {
    return res.send('home')
})

connection()

app.listen(PORT, () => console.log(`Server is listrening on port: http://localhost:${PORT}`))