const express = require('express');
const path = require('path');
const cors = require('cors');

var mysql = require('mysql');
const { time } = require('console');

const app = express();
app.use(cors());
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wongly_informed-no"
});


// get catagory suffys
app.get('/cat', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var sql = "SELECT * FROM catagory LIMIT 1000;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log("test", result);
      const t1 = performance.now();
      result.push(t1 - t0);
      res.send(result);
    });
  });
  const t1 = performance.now();
  console.log(`catagorys ${t1 - t0} milliseconds.`);
})


//get themes
app.get('/theme/:id', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var id= req.params.id;
    var sql = "SELECT * FROM theme Where CatID = " + id + ";";
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log("test", result);
      const t1 = performance.now();
      result.push(t1 - t0);
      res.send(result);
    });
  });
  const t1 = performance.now();
  console.log(`themes ${t1 - t0} milliseconds.`);
})


// get the questions and ansers
app.get('/qn/:id/all', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var id= req.params.id;
    var sql = "SELECT * FROM `qn-" + id + "`, `qn-ans-" + id + "` WHERE `qn-" + id + "`.qnID = `qn-ans-" + id + "`.`qnID` LIMIT 1000;";
    con.query(sql, function (err, result) {
      if (err) {
        console.log("fuck");
      }
      //console.log("test", result);
      const t1 = performance.now();
      result.push(t1 - t0);
      res.send(result);
    });
  });
  const t1 = performance.now();
  console.log(`qn all ${t1 - t0} milliseconds.`);
})

app.get('/qn/:id', function(req, res){
  const t0 = performance.now();
  // res.send('id: ' + req.params.id); 
  var id= req.params.id;
  var sql2 = "SELECT * FROM `qn-" + id + "`, `qn-ans-" + id + "` WHERE `qn-" + id + "`.qnID = `qn-ans-" + id + "`.`qnID` ORDER BY RAND() LIMIT 10;";
  con.query(sql2, function (err, result) {
    if (err){
      console.log(err);
    }
    //console.log("test", result);
    const t1 = performance.now();
    result.push(t1 - t0);
    res.send(result);
  });
  const t1 = performance.now();
  console.log(`qn ${t1 - t0} milliseconds. fra qn-` + id);
});


// you shold understand this atleast
app.listen(port, () => {
  console.log(`ip:${port}`);
})