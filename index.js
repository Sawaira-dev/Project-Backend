const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api', require('./api/products/Router'))
app.use('/api', require('./api/category/router'))
app.use('/api',require('./api/brands/router'))
app.use('/api',require('./api/user/Router'))


// mongoose.connect(process.env.MONGO_URI)
// .then(()=> console.log("Connected DaTa Base"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})