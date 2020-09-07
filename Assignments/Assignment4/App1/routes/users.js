const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const router = express.Router()

// /user/profile/id
// /user/profile/1
// /user/profile/5
router.get('/profile/:userId', (request, response) => {
  // console.log(request.url)

  // get the user id from url path
  const { userId } = request.params
  // console.log(request.params)

  // get the id from query parameters
  // const { id } = request.query
  // console.log(request.query)

  const statement = `select id, email, firstName, lastName, mobile from user where id = ${userId}`
  db.query(statement, (error, users) => {
    if (error) {
      response.send({ status: 'error', error: error })
    } else {
      if (users.length == 0) {
        // user does not exist
        response.send({ status: 'error', error: 'user does not exist' })
      } else {
        // user exists
        const user = users[0]
        response.send({ status: 'success', data: user })
      }
    }
  })
})

router.post('/signup', (request, response) => {
  //object dereferencing
  const { firstName, lastName, email, password, phone } = request.body
    
  const encryptedPassword = crypto.SHA256(password)
  const statement = `insert into user (firstName, lastName, email, password, mobile) values 
  ('${firstName}', '${lastName}', '${email}', '${encryptedPassword}', '${phone}')`
  
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/signin', (request, response) => {
  const { email, password } = request.body

  const encryptedPasssword = crypto.SHA256(password)
  const statement = `select id, email, firstName, lastName from user where email = '${email}' and password = '${encryptedPasssword}'`
  db.query(statement, (error, users) => {
    if (error) {
      response.send({ status: 'error', error: error })
    } else {
      if (users.length == 0) {
        // user does not exist
        response.send({ status: 'error', error: 'user does not exist' })
      } else {
        // user exists
        const user = users[0]
        response.send({ status: 'success', data: user })
      }
    }
  })
})

router.put('/profile', (request, response) => {
  response.send('user profile')
})

router.delete('/', (request, response) => {
  response.send('deleted user account')
})


module.exports = router