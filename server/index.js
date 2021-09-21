const express = require("express");
const path = require('path')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.use(express.static(path.join(__dirname, '../main.js')))


const port = process.env.PORT || 4007;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})