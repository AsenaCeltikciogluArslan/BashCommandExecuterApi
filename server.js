const express = require('express')
const routes = require('./routes/routes');
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')

const app = express()
const port = process.env.PORT

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extend: false }))
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

