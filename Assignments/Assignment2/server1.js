
const express = require('express');
const { request, response } = require('express');

const bodyParse = require('body-parser');

const app = express();

const mysql = require('mysql')

app.use(bodyParse.json());

app.get('/', (request, response) => {
    
    response.end("WELCOME TO REST API SERVER 1")

})

app.get('/customers', (request, response) => {
   const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "manager",
        database: "nodeApps"
    })
    connection.connect();

    const statement = `SELECT * FROM customers;`

    connection.query(statement, (error, data) => {
        
        connection.end();

        if(error){
            console.table(error)
            response.send(error);
        }else{
            console.table(data)
            response.send(data);
        }

    })
})

app.post('/customers', (request, response) => {
    const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "manager",
         database: "nodeApps"
     })
     connection.connect();
 
     const statement = `INSERT INTO customers(name, password, mobile, address, email)
                        VALUES('${request.body.name}','${request.body.password}','${request.body.mobile}','${request.body.address}','${request.body.email}');`
 
     connection.query(statement, (error, data) => {
         
         connection.end();
 
         if(error){
             console.table(error)
             response.send(error);
         }else{
             console.table(data)
             response.send(data);
         }
     })
 })

 app.put('/customers', (request, response) => {
    const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "manager",
         database: "nodeApps"
     })
     connection.connect();
 
     const statement = `UPDATE customers SET name = '${request.body.name}', password = '${request.body.password}', mobile = '${request.body.mobile}', address = '${request.body.address}', email = '${request.body.email}'
                        WHERE id = ${request.body.id};`
 
    console.log(statement);
     connection.query(statement, (error, data) => {
         
         connection.end();
 
         if(error){
             console.table(error)
             response.send(error);
         }else{
             console.table(data)
             response.send(data);
         }
     })
 })

 app.delete('/customers', (request, response) => {
    const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "manager",
         database: "nodeApps"
     })
     connection.connect();
 
     const statement = `DELETE FROM customers 
                        WHERE id = ${request.body.id};`
 
    console.log(statement);
     connection.query(statement, (error, data) => {
         
         connection.end();
 
         if(error){
             console.table(error)
             response.send(error);
         }else{
             console.table(data)
             response.send(data);
         }
     })
 })

app.listen('3000','0.0.0.0',()=>{
    console.log("server started on port 3000")
})


//InsertCustomerDetails('Sanket', 'sank@123', '9764595693', 'udgir', 'sank@gmail.com')
// InsertCustomerDetails('Shubham', 'shub@123', '7507272838', 'udgir', 'shub@gmail.com')
// InsertCustomerDetails('Vaibhav', 'vaib@123', '4869561578', 'solapur', 'vaib@gmail.com')