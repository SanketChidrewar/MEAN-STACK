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

    const statement = `SELECT * FROM books;`

    mysql.query(statement, (error, data) => {
       response.send(utils.createResult(error,data))
    })
})

router.get('/subject', (request, response) => {
    // response.send('inside get all users')

    const statement = `SELECT DISTINCT subject FROM books;`

    mysql.query(statement, (error, data) => {
       response.send(utils.createResult(error,data))
    })
})

router.get('/:subject', (request, response) => {
    // response.send('inside get all users')
    // const {id} = request.headers['id']
    const {subject} = request.params
      // console.log(id)
    //   console.log(request.params)

    const statement = `SELECT * FROM books where subject = '${subject}';`

    mysql.query(statement, (error, subjects) => {
        if(subjects.length == 0)
        {
            response.send({result:`there is no any book with the subject name ${subject}`})
        }
        else{
       response.send(utils.createResult(error,subjects))
        }
    })
})

router.get('/id/:id', (request, response) => {
    // response.send('inside get all users')

    const {id} = request.params
    // console.log(id);

    const statement = `SELECT * FROM books where id = ${id};`

    mysql.query(statement, (error, book) => {
        if(book.length == 0)
        {
            response.send({result:`there is no any book with the id as ${id}`})
        }
        else{
       response.send(utils.createResult(error,book))
        }
    })
})


//--------------------------------------------------------------------------------------------------------------------------------
//POST-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


router.post('/', (request, response) => {
  // response.send('inside sign in')
  const {id, name, author, subject, price} = request.body
  // console.log(email+ " " + password)

  const statement = `insert into books(id, name,author, subject, price) values(${id}, '${name}', '${author}', '${subject}', '${price}' );`
//   console.log(statement)
  mysql.query(statement, (error, data) => {
      response.send(utils.createResult(error,data))
  })
})


//--------------------------------------------------------------------------------------------------------------------------------
//PUT-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


router.put('/', (request, response) => {
    // response.send('inside sign in')
    const {id, name, author, subject, price} = request.body
    // console.log(email+ " " + password)
  
    const statement = `update books SET name = '${name}', author = '${author}', subject = '${subject}', price = ${price} WHERE id = ${id} ;`
    // console.log(statement)
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

  const statement = `delete from books where id = ${id};`
  mysql.query(statement, (error, data) => {
      response.send(utils.createResult(error,data))
  })
})


module.exports = router;