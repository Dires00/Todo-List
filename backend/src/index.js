const express = require('express')
const app = express()
require('./config/mongoConfig')


app.use(express.json())

app.get('/', (request, response) =>{
    return response.send('Hello Word')
})

app.listen(3333)