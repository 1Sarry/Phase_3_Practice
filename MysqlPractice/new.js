const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");

var app = express();

/*
Question 1: Create a MySQL database by the name "myDB" and create a database user by
the name "myDBuser" with a permissions to connect with the "myDB" database. Use the
"mysql" module to create a connection with the newly created database. Display console
message if the connection is successful or if it has an error.
Please find further instructions under the “Instructions for question 1” below.


*/

// Create COnnection with Node - MySQL DB  db name = myDB    db user = myDBuser

const Connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "123",
  database: "mydb",

  // host: "localhost",
  // user: "myDBuser",
  // password: "123",
  // database: "mydb2",
});
Connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected Successfully");
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});

app.get("/", (req, res) => {
  res.end("Connected");
});

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
Please find further instructions under the “Instructions for question 2” below.

*/

// Create Tables using node to the connected DB

app.get("/install", (req, res) => {
  let message = "Tables Created Successfully";
  let createProd = `CREATE TABLE if not exists Products(
    product_id int(11) auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
  )`;
  let createProdDesc = `CREATE TABLE if not exists ProductDescription(
    description_id int(11) auto_increment,
    product_id int(11) not null,
    product_brief_descrption TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let creatPrice = `CREATE TABLE  if not exists ProductPrice(
    price_id int(11) auto_increment,
    product_id int(11) not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let ceateUser = `CREATE TABLE if not exists User(
    user_id int(11) auto_increment,
    user_name TEXT not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id)
  )`;
  let createOrder = `CREATE TABLE if not exists Orders(
    order_id int(11) auto_increment,
    product_id int(11) not null,
    user_id int(11) not null,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
  )`;

  Connection.query(createProd, (err, results, fields) => {
    if (err) console.log(err);
  });
  Connection.query(createProdDesc, (err, results, fields) => {
    if (err) console.log(err);
  });
  Connection.query(creatPrice, (err, results, fields) => {
    if (err) console.log(err);
  });
  Connection.query(ceateUser, (err, results, fields) => {
    if (err) console.log(err);
  });
  Connection.query(createOrder, (err, results, fields) => {
    if (err) console.log(err);
  });
  res.end(message);
  console.log("Table Created");
});

// Send POST req. from HTML Form to INSERT data into our table in our DB.

/*
Question 3: Create an HTML file called, “index.html” with a form to populate the
"products" table you created above.
● The form on the HTML page should send a POST request to a URL named
"/add-product"
● Use Express to receive the POST request
● Use the body-parser module to parse the POST request sent to your Express server
● Write a SQL query to insert the data received from the HTML form into the
"products" table

*/

// using bodyparser
// parse data collect the data we enter on our browser(form) parseit into objects and send it to the webserver

app.use(bodyparser.urlencoded({ extended: true }));
app.post("/addiphones", (req, res) => {
  console.log(req.body);
  let Url = req.body.pr_url;
  let Name = req.body.pr_name;

  let addToProd =
    "INSERT INTO products (product_url, product_name) VALUES ('" +
    Url +
    "', '" +
    Name +
    "' )";

  Connection.query(addToProd, (err, result) => {
    if (err) throw err;
    console.log("Record added");
  });
  res.end("You are good to go!");
});

//   res.end("You are good to go!");
// });

// using the latest built-in express method
// app.use(app, json());
// app.use(
//   app.urlencoded({
//     extended: true,
//   })
// );
app.post("/addiphones", (req, res) => {
  console.table(req.body);
  const { Url, Name } = req.body;
  let insertProd = `INSERT INTO Products (Url, Name) VALUES (?, ?)`;
  Connection.query(insertProd, [Url,Name], (err, result, fields) => {
    if (err) console.log(`Error Found: ${err}`)
  })
  console.table(results)
});
