
const express = require('express');
const { request, response } = require('express');

const bodyParse = require('body-parser');

const app = express();

const mysql = require('mysql')

app.use(bodyParse.json());

app.get('/', (request, response) => {
    
    response.end("WELCOME TO REST API SERVER 2")

})

app.get('/pizza_items', (request, response) => {
   const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "manager",
        database: "nodeApps"
    })
    connection.connect();

    const statement = `SELECT * FROM pizza_items;`

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

app.post('/pizza_items', (request, response) => {
    const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "manager",
         database: "nodeApps"
     })
     connection.connect();
 
     const statement = `INSERT INTO pizza_items(name, type, category, description)
                        VALUES('${request.body.name}','${request.body.type}','${request.body.category}','${request.body.description}');`
 
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

 app.put('/pizza_items', (request, response) => {
    const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "manager",
         database: "nodeApps"
     })
     connection.connect();
 
     const statement = `UPDATE pizza_items SET name = '${request.body.name}', type = '${request.body.type}', category = '${request.body.category}', description = '${request.body.description}'
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

 app.delete('/pizza_items', (request, response) => {
    const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "manager",
         database: "nodeApps"
     })
     connection.connect();
 
     const statement = `DELETE FROM pizza_items 
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
