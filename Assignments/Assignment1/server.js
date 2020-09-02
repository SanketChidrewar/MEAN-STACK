const express = require('express')
const { response, request, json } = require('express')

const backend = require('./backend');
const { getCustomerDetails } = require('./backend');

// console.log(server)

const app = express()

app.use(express.json());

app.get('/', (request, response) => {
    response.send("<h1>WELCOME TO PIZZA CENTER</h1>");
})

app.post('/insertCustomer', (request, response) => {
    // console.log(`${request.body['name']},${request.body['password']},${request.body['mobile']},${request.body['address']},${request.body['email']}`);
    promise = backend.InsertCustomerDetails(request.body['name'],request.body['password'],request.body['mobile'],request.body['address'],request.body['email'])

    promise.then((res) => {
        console.table(res)
        response.setHeader('Content-Type','application/json');
        response.send(res) 
    }).catch((rej) => {
        console.table(rej);
        response.setHeader('Content-Type','application/json');
        response.send(rej) 
    })
})

app.get('/customer', (request, response) => {
    
    promise = backend.getCustomerDetails();

    promise.then((res) => {
        console.table(res)
        response.setHeader('Content-Type','application/json');
        response.send(res) 
    }).catch((rej) => {
        console.table(rej);
        response.setHeader('Content-Type','application/json');
        response.send(rej) 
    })
    // console.log('inside get method');
    // console.log(data);
    // response.send('Hello')
})

app.post('/insertPizza_items', (request, response) => {
    // console.log(request.body['name'], request.body['type'], request.body['category'], request.body['description']);
    promise = backend.InsertPizzaItemDetails(request.body['name'], request.body['type'], request.body['category'], request.body['description'])

    promise.then((res) => {
        console.table(res)
        response.setHeader('Content-Type','application/json');
        response.send(res) 
    }).catch((rej) => {
        console.table(rej);
        response.setHeader('Content-Type','application/json');
        response.send(rej) 
    })
})

app.post('/pizza_items', (request, response) => {
    // console.log(request.body['name']);
    promise = backend.getPizzaItemsOfCustomer(`${request.body['name']}`)

    promise.then((res) => {
        console.table(res)
        response.setHeader('Content-Type','application/json');
        response.send(res) 
    }).catch((rej) => {
        console.table(rej);
        response.setHeader('Content-Type','application/json');
        response.send(rej) 
    })
})


app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000')
})
