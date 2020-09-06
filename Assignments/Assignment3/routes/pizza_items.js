const express = require('express')

const utils = require('../utils')

const db = require('../db')

const router = express.Router();

router.get('/', (request, response) => {
 
     const statement = `SELECT * FROM pizza_items;`
 
     db.query(statement, (error, data) => { 
         
        response.send(utils.createResult(error,data));

     })
 })
 
 router.post('/', (request, response) => {
  
    const statement = `INSERT INTO pizza_items(name, type, category, description)
                         VALUES('${request.body.name}','${request.body.type}','${request.body.category}','${request.body.description}');`
  
    db.query(statement, (error, data) => {
  
        response.send(utils.createResult(error,data));

      })
  })
 
  router.put('/', (request, response) => {
  
      const statement = `UPDATE pizza_items SET name = '${request.body.name}', type = '${request.body.type}', category = '${request.body.category}', description = '${request.body.description}'
                         WHERE id = ${request.body.id};`
  
    db.query(statement, (error, data) => {
            
        response.send(utils.createResult(error,data));

      })
  })
 
  router.delete('/', (request, response) => {
  
      const statement = `DELETE FROM pizza_items 
                         WHERE id = ${request.body.id};`
  
    db.query(statement, (error, data) => {
            
        response.send(utils.createResult(error,data));

      })
  })

  module.exports = router;