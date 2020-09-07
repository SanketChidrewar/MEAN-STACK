                

const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get('/:id', (request, response) => {
    const { id } = request.params
    const statement = `select id, userId, contents, timestamp from notes where userId = ${id}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

router.post('/:id', (request, response) => {
    const { id } = request.params
    const { contents } = request.body
    const statement = `insert into notes (contents, userId) values ('${contents}', '${id}')`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.put('/:id', (request, response) => {
    const { id } = request.params
    const { contents } = request.body
    const statement = `update notes set contents = '${contents}' where userId = '${id}'`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })

  router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from notes where userId = '${id}'`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })


module.exports = router