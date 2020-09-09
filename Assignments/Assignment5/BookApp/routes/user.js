const express = require('express')
const mysql = require('../db')
const utils = require('../utils');
const { request, response } = require('express');
const jwt = require('jsonwebtoken')

const router = express.Router();

//--------------------------------------------------------------------------------------------------------------------------------
//GET-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


router.get('/', (request, response) => {
    // response.send('inside get all users')

    const statement = `SELECT * FROM customers;`

    mysql.query(statement, (error, data) => {
       response.send(utils.createResult(error,data))
    })
})

router.get('/:id', (request, response) => {
    // response.send('inside get all users')
    // const {id} = request.headers['id']
    const {id} = request.params
      // console.log(id)
    //   console.log(request.params)

    const statement = `SELECT * FROM customers where id = ${id};`

    mysql.query(statement, (error, data) => {
       response.send(utils.createResult(error,data))
    })
})


//--------------------------------------------------------------------------------------------------------------------------------
//POST-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


router.post('/signup', (request, response) => {
  // response.send('inside sign in')
  const {name, password, mobile, address, email} = request.body
  // console.log(email+ " " + password)

  const statement = `insert into customers(name,password,mobile,address,email) values('${name}', '${password}', '${mobile}', '${address}', '${email}' );`
  console.log(statement)
  mysql.query(statement, (error, data) => {
      response.send(utils.createResult(error,data))
  })
})


router.post('/signin', (request, response) => {
  // response.send('inside sign in')
  const {email, password} = request.body
  // console.log(email+ " " + password)

  const statement = `select * from customers where email = '${email}' and password = '${password}';`
  // console.log(statement)
  mysql.query(statement, (error, users) => {
    if(error){
      response.send({status: "error", error: error})
    }else{
      if(users.length == 0)
      {
        response.send({status: "error", error: "user does not exist"})
      }else{
        const user = users[0]
        const token = jwt.sign({id:user['id']}, '1234567890')
        response.send({
          status: 'success', data: {
            name: user['name'],
            mobile: user['mobile'],
            address: user['address'],
            email: user['email'],
            token: token
          }
        })
      }
    }
    response.send(utils.createResult(error,data))
  })
})


//--------------------------------------------------------------------------------------------------------------------------------
//PUT-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------

router.put('/', (request, response) => {
  // response.send('inside sign in')
  const {id, name, password, mobile, address, email} = request.body
  // console.log(email+ " " + password)

  const statement = `update customers SET name = '${name}',  password = '${password}',  mobile = '${mobile}', address = '${address}', email = '${email}' where id = ${id};`
  console.log(statement)
  mysql.query(statement, (error, data) => {
      response.send(utils.createResult(error,data))
  })
})


//--------------------------------------------------------------------------------------------------------------------------------
//DELETE-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------

router.delete('/', (request, response) => {
  // response.send('inside sign in')
  const {id} = request.body
  // console.log(email+ " " + password)

  const statement = `delete from customers where id = ${id};`
  mysql.query(statement, (error, data) => {
      response.send(utils.createResult(error,data))
  })
})


module.exports = router;