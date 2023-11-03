var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//db config
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sapassword",
  database: "zens",
});
// kết nối vào cơ sở dữ liệu
dbConn.connect();

//tạo table user
app.get("/create-table-user", function (req, res) {
  dbConn.query(
    `
    CREATE TABLE user (user_id INT PRIMARY KEY, username VARCHAR(255) UNIQUE);
    `,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: "success" });
    }
  );
});

//tạo table joke
app.get("/create-table-joke", function (req, res) {
  dbConn.query(
    `
    CREATE TABLE joke (
    joke_id INT PRIMARY KEY,
    joke_text TEXT,
    post_date DATE
);
    `,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: "success" });
    }
  );
});

//tạo table vote
app.get("/create-table-vote", function (req, res) {
  dbConn.query(
    `
CREATE TABLE vote (
    vote_id INT PRIMARY KEY,
    joke_id INT,
    user_id INT,
    vote_type ENUM('like', 'dislike'),
    vote_date DATE,
    FOREIGN KEY (joke_id) REFERENCES joke(joke_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);
    `,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: "success" });
    }
  );
});

app.get("/jokes", function (req, res) {
  dbConn.query("SELECT * FROM joke", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "joke list." });
  });
});

// route mặc định
app.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});
// chỉnh port
app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});
module.exports = app;
