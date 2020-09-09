const express = require('express')
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/book')
const { request } = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())


app.use('/user', userRoutes)
app.use('/book', bookRoutes)

app.get('/', (request, response) => {
    response.send('Welcome to Book App')
})


app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000')
})