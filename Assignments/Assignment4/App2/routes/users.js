const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/profile', (request, response) => {

  const token = request.headers['token']

  try {
    const data = jwt.verify(token, '1234567890')
    const statement = `select email, firstName, lastName, mobile from user where id = ${data.id}`
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
  } catch(ex) {
    response.status(401)
    response.send('you are not allowed to access this api')
  }
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
        const token = jwt.sign({id: user['id']}, '1234567890')
        response.send({ status: 'success', data: {
            firstName: user['firstName'],
            lastName: user['lastName'],
            email: user['email'],
            phone: user['phone'],
            token: token
          }
        })     
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