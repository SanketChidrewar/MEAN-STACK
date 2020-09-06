const express = require('express')

const utils = require('../utils')

const db = require('../db')

const router = express.Router()


router.get('/', (request, response) => {

    const statement = `SELECT * FROM customers;`

    db.query(statement, (error, data) => {
        
        response.send(utils.createResult(error,data));

    })
})

router.post('/', (request, response) => {
 
     const statement = `INSERT INTO customers(name, password, mobile, address, email)
                        VALUES('${request.body.name}','${request.body.password}','${request.body.mobile}','${request.body.address}','${request.body.email}');`
 
    db.query(statement, (error, data) => {
          
        response.send(utils.createResult(error,data));

     })
 })

 router.put('/', (request, response) => {
 
     const statement = `UPDATE customers SET name = '${request.body.name}', password = '${request.body.password}', mobile = '${request.body.mobile}', address = '${request.body.address}', email = '${request.body.email}'
                        WHERE id = ${request.body.id};`
 
    db.query(statement, (error, data) => {
          
        response.send(utils.createResult(error,data));

     })
 })

 router.delete('/', (request, response) => {
 
     const statement = `DELETE FROM customers 
                        WHERE id = ${request.body.id};`
 
     db.query(statement, (error, data) => {        
 
        response.send(utils.createResult(error,data));

     })
 })

 module.exports = router