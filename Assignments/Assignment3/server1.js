
const express = require('express');
const { request, response } = require('express');

const bodyParse = require('body-parser');

// routes
const routerCustomer = require('./routes/customers')
const routerPizza_items = require('./routes/pizza_items')

const app = express();

//get input from user using request.body
app.use(bodyParse.json());

//add routes to the application
app.use('/customers',routerCustomer)
app.use('/pizza_items',routerPizza_items)


app.get('/', (request, response) => {
    
    response.end("WELCOME TO REST API SERVER 1")

})

app.listen('3000','0.0.0.0',()=>{
    console.log("server started on port 3000")
})
