const mysql = require("mysql");
const express = require("express");
var app = express();

// 1. Connecting with DB

/*
Question 1: Create a MySQL database by the name "myDB" and create a database user by
the name "myDBuser" with a permissions to connect with the "myDB" database. Use the
"mysql" module to create a connection with the newly created database. Display console
message if the connection is successful or if it has an error.

*/

// const dbconnection = mysql.createConnection({
//   host: "localhost",
//   user: "myDBuser",
//   password: "123",
//   database: "mydb",
// });

// dbconnection.connect((err) =>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("Connected Successfully!!")
//   }
// })

// app.listen(8989, () =>{
//   console.log("Listening on port 8989")
// })

// const mysqlConnect = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "saron",
//   password: "123",
//   database: "practice_db",
// });

// mysqlConnect.connect((err) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("DB Connected")
//     }
// })
// app.listen(4000, () => {
//   console.log("Listening on port 7000");
// });

// Create and Execute Tables in Node

/*

Question 2: Here is a link to a document that contains the tables we need to create and
convert the apple.com/iphones page into a dynamic page with a database. As you can see
from the document, there are 5 tables that are needed (please scroll horizontally and
vertically over the document to see all the 5 tables). Write a SQL query to create the
apple.com tables inside of the "myDB" database you created above. Once you write the
queries, use the "mysql" module to execute the queries on the database. Try both of these
methods to initiate the execution of the queries:
● Include the execution code directly in the module to be executed as you run the app
● Use the Express module to receive requests. Configure your module in a way that it
executes the queries when the "/install" URL is visited.

*/

const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "123",
  database: "mydb",
});

dbconnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected Successfully!!");
  }
});

app.listen(4040, () => {
  console.log("Listening on port 4040");
});

app.get("/", (req, res) => {
  res.send("Working");
});

// delete table query
// const deleteTable = "DROP TABLE ayfo";
// app.get("/install", (req, res) => {
//   dbconnection.query(deleteTable, (err, results, fields) =>{
//     if(err){
//       console.log(err)
//     }
//     res.end("Deleted Successfully")
//   })
// })




app.get("/install", (req, res) => {
  let createProd = `CREATE TABLE if not exists products(
    product_id int auto_increment, 
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
    )`;

  let createProdDesc = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_id int(10) not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  )`;

  let createProdPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int(10) auto_increment,
    product_id int(10) not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  )`;

  let createOrder = `CREATE TABLE if not exists Orders(
    order_id int(10) auto_increment,
    product_id int(10) not null,
    user_id int(10) not null,
    PRIMARY KEY (order_id)
  )`;
  
// dropping table column

const dropCol = "ALTER TABLE Orders ADD COLUMN product_id int;" ;
app.get("/saron", (req, res) => {
  dbconnection.query(dropCol, (err, results, fields) =>{
    if(err){
      console.log(err)
    }
    res.end("product_id dropped")
  })
})


// Add new column to Orders table

// const addCol = "ALTER TABLE Orders ADD COLUMN product_id int;" ;
// app.get("/add", (req, res) => {
//   dbconnection.query(addCol, (err, results, fields) =>{
//     if(err){
//       console.log(err)
//     }
//     res.end("FOREIGN KEY added")
//   })
// })



  let createUser = `CREATE TABLE if not exists User(
    user_id int(10) auto_increment,
    user_name varchar(20) not null,
    user_password varchar(50) not null,
    PRIMARY KEY (user_id)
  )`;
  dbconnection.query(createProd, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  dbconnection.query(createProdDesc, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  dbconnection.query(createProdPrice, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  dbconnection.query(createOrder, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  dbconnection.query(createUser, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.end("Table Created");
    }
  });
});


/*

 Question 3: Create an HTML file called, “index.html” with a form to populate the
 "products" table you created above.
 ● The form on the HTML page should send a POST request to a URL named
 "/add-product"
 ● Use Express to receive the POST request
 ● Use the body-parser module to parse the POST request sent to your Express server
 ● Write a SQL query to insert the data received from the HTML form into the
 "products" table
 Please find further instructions under the “Instructions for question 3” below.

*/

