const express = require('express')
const routes = require('./routes')
const cors = require('cors')


const app = express()
require('./config/mongoConfig')

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (request, response) =>{
    return response.send('Hello Word')
})

app.listen(3333)