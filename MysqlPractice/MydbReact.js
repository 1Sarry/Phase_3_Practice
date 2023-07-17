const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
var app = express();
var cors = require("cors");

const Connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "123",
  database: "mydb3",
});
Connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected Successfully");
});

app.listen(4040, () => {
  console.log("Listening on Port 4000");
});

app.get("/", (req, res) => {
  res.end("Connected");
});

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

  Connection.query(createProd, (err, results, fields) => {
    if (err) console.log(err);
  });
  Connection.query(createProdDesc, (err, results, fields) => {
    if (err) console.log(err);
  });
  Connection.query(creatPrice, (err, results, fields) => {
    if (err) console.log(err);
  });
  res.end(message);
  console.log("Table Created");
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());


app.post("/addiphones", (req, res) => {
  console.table(req.body);
  const { pr_url, pr_name } = req.body;

  let insertProd = `INSERT INTO Products (product_url, product_name) VALUES (?, ?)`;
  Connection.query(insertProd, [pr_url, pr_name], (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
    console.table(results);
  });

  const id = results.insertId;
  console.log("product ID foreign Key", id);

  const { pr_brief, pr_desc, pr_img, pr_link, price_st, price_range} = req.body;
  console.log(req.body);


  let insertProdDesc = `INSERT INTO ProductDescription ( product_brief_descrption, product_description, product_img, product_link) VALUES (?, ?, ?, ?)`;
  Connection.query(
    insertProdDesc,
    [id, pr_brief, pr_desc, pr_img, pr_link, ],
    (err, results, fields) => {
      if (err) console.log(`Error Found: ${err}`);
      console.table(results);
    }
  );


  let insertPrice = `INSERT INTO ProductPrice (starting_price, price_range, ) VALUES (?, ?)`;
  Connection.query(
    insertPrice,
    [id, price_st, price_range],
    (err, results, fields) => {
      if (err) console.log(`Error Found: ${err}`);
      console.table(results);
    }
  );
  res.end("Data Inserted Successfully");
});
