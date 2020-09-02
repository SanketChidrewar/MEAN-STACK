
//load mysql module which is provided by node
const mysql = require('mysql')
// var Promise = require('promise');


function InsertCustomerDetails(name, password, mobile, address, email){

        // step1.1: create connection
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'nodeApps'
    })

        // step1.2: open the connection
    connection.connect()

    // step2: prepare SQL query
    const statement = `insert into customer (name, password, mobile, address, email) values ('${name}', '${password}', '${mobile}', '${address}', '${email}');`

    //step3 :execute the query
    const result = new Promise((resolve, reject) =>{

        connection.query(statement, (error, data) => {
            if (error){
                reject(error)
            }else{
                resolve(data)
            }

            // step4 : close the connection
        connection.end()
        })
    })

    return result;
}

// InsertCustomerDetails('Sanket', 'sank@123', '9764595693', 'udgir', 'sank@gmail.com')
// InsertCustomerDetails('Shubham', 'shub@123', '7507272838', 'udgir', 'shub@gmail.com')
// InsertCustomerDetails('Vaibhav', 'vaib@123', '4869561578', 'solapur', 'vaib@gmail.com')


function getCustomerDetails(){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'nodeApps',
        port: 3306
    })

    connection.connect();

    const statement = 'SELECT * FROM customer;'

    var promise = new Promise((resolve, reject) =>{

    connection.query(statement, (error, data) => {
           
            if (error) {
                reject(error)
            }else{
            // console.log(data);
            resolve(data);
            }
        })
    })

    connection.end();

    return promise;
}

// var promise =  getCustomerDetails();
// promise.then(function(result) {
//     console.log(result); // "Stuff worked!"
//   }, function(err) {
//     console.log(err); // Error: "It broke"
//   });

function InsertPizzaItemDetails(name, type, category, description){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'nodeApps',
        port: 3306
    });

    connection.connect();

    const statement = `INSERT INTO pizza_items(name, type, category, description) VALUES('${name}', '${type}', '${category}', '${description}');`

    const result = new Promise((resolve, reject) =>{

    connection.query(statement, (error, data) => {
        if(error){
            resolve(error);
        }else{
            reject(data);
        }
            connection.end();
        })
    })
    return result;
}

// InsertPizzaItemDetails('Sanket','Margherita', 'pizza', 'pizza');
// InsertPizzaItemDetails('Sanket pizza','Kebab pizza', 'pizza', 'pizza');
// InsertPizzaItemDetails('Shubham','Neapolitan', 'pizza', 'pizza');
// InsertPizzaItemDetails('Shubham','Bagel', 'pizza', 'pizza');
// InsertPizzaItemDetails('Vaibhav','Cauliflower', 'pizza', 'pizza');


function getPizzaItemsOfCustomer(name){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'nodeApps',
        port: 3306
    })

    connection.connect();

    const statement = `SELECT * FROM pizza_items WHERE name = '${name}';`

    const result = new Promise((resolve, reject) =>{

    connection.query(statement, (error, data) => {
        if(error){
            resolve(error);
        }
        else{
            reject(data);
        }
        })
    connection.end();

    })
    return result;
}
// getPizzaItemsOfCustomer('Sanket');

module.exports = {
    InsertCustomerDetails: InsertCustomerDetails,
    getCustomerDetails: getCustomerDetails,
    InsertPizzaItemDetails: InsertPizzaItemDetails,
    getPizzaItemsOfCustomer: getPizzaItemsOfCustomer
}

// console.log(module);


