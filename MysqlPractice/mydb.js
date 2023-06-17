const mysql = require("mysql");
const express = require("express");
var app = express();

const mydbconnection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "123",
  database: "mydb2",
});

mydbconnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected Successfully!!");
  }
});

app.listen(2000, () => {
  console.log("Listening on port 2000");
});

app.get("/", (req, res) => {
  res.send("Working");
});

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
      PRIMARY KEY (order_id),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    )`;
  // let createUser = `CREATE TABLE if not exists User(
  //       user_id int(10) auto_increment,
  //       user_name varchar(20) not null,
  //       user_password varchar(50) not null,
  //       PRIMARY KEY (user_id),
  //       FOREIGN KEY (order_id) REFERENCES User(order_id)
  //     )`;
  let createNewUser = `CREATE TABLE if not exists user(
    user_id int(10) auto_increment,
        user_name varchar(20) not null,
        user_password varchar(50) not null,
        PRIMARY KEY (user_id)
   )`;

  // delete table
  // const dropTable = "DROP TABLE User";
  // app.get("/saron", (req, res) => {
  //   mydbconnection.query(dropTable, (err, results, fields) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.end("User dropped");
  //   });
  // });

  const dropTableOrder = "DROP TABLE Orders";
  app.get("/order", (req, res) => {
    mydbconnection.query(dropTableOrder, (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      res.end("Orders dropped");
    });
  });



  mydbconnection.query(createProd, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  mydbconnection.query(createProdDesc, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  mydbconnection.query(createProdPrice, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  mydbconnection.query(createOrder, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.end("Table Created");
  });
  // mydbconnection.query(createUser, (err, results, fields) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.end("Table Created");
  //   }
  // });
  mydbconnection.query(createNewUser, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.end("Table Created");
    }
  });
});
