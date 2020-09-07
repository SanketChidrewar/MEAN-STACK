const express = require('express')
const bodyParser = require('body-parser')

// get the routers
const routerUsers = require('./routes/users')
const routerNotes = require('./routes/notes')

const app = express()
app.use(bodyParser.json())

// add the routers
app.use('/user', routerUsers)
app.use('/note', routerNotes)

// default handler
app.get('/', (request, response) => {
  response.send('welcome to note backend')
})

// starting the server
app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})