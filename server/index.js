const express = require("express");

const app = express()

app.use(express.json())


SERVER_PORT = 5500;

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})