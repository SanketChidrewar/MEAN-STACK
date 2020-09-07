const express = require('express')
const db = require('../db')
const utils = require('../utils')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/', (request, response) => {

    const token = request.headers['token']
    try {
      const data = jwt.verify(token, '1234567890')
      const statement = `select id, userId, contents, timestamp from notes where userId = ${data.id}`
      db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
      })
    } catch (ex) {
      response.status(401)
      response.send('you are not allowed to access this API')
    }
  })

router.post('/', (request, response) => {
    const token = request.headers['token']

    try {
      const data = jwt.verify(token,'1234567890')
      console.log(data);
      const { contents } = request.body
      const statement = `insert into notes (contents, userId) values ('${contents}', '${data.id}')`
      db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
      })
    } catch (ex) {
      response.status(401);
      response.send('you are not allowed to access this API')
    }
  })

  router.put('/', (request, response) => {
    const token = request.headers['token']

    try {
      const data = jwt.verify(token,'1234567890')
      const { contents } = request.body
      const statement = `update notes set contents = '${contents}' where userId = '${data.id}'`
      db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
      })
    } catch (ex) {
      response.status(401);
      response.send('you are not allowed to access this API') 
    }
  })

  router.delete('/', (request, response) => {
    const token = request.headers['token']
    try {
      const data = jwt.verify(token, '1234567890')
      const statement = `delete from notes where userId = '${data.id}'`
      db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
      })
    } catch (ex) {
      response.status(401);
      response.send('you are not allowed to access this API')
    }
  })


module.exports = router