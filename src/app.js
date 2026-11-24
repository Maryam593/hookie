import express from "express"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT || 3000
const myCranio = express()
myCranio.listen(port, () => {
    console.log(`cranio is running successfully on ${port}`)
})
