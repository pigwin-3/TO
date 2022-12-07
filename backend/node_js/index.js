const express = require('express');
const path = require('path');
const cors = require('cors');

var mysql = require('mysql');
const { time } = require('console');
var config  = require("./conf.json");
const { json } = require('express');

const app = express();
app.use(cors());
const port = config.webport;

var con = mysql.createConnection(config.db);


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
app.get('/qnawns/:id/all', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var id= req.params.id;
    var sql = 'SELECT * FROM `qn`, `qn-ans` WHERE`qn`.`theme` = "' + id + '" AND `qn`.qnID = `qn-ans`.`qnID` LIMIT 1000;';
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

app.get('/qnawns/:id', function(req, res){
  const t0 = performance.now();
  // res.send('id: ' + req.params.id); 
  var id= req.params.id;
  var sql2 = 'SELECT * FROM `qn`, `qn-ans` WHERE`qn`.`theme` = "' + id + '" AND `qn`.qnID = `qn-ans`.`qnID` ORDER BY RAND() LIMIT 10;';
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

//get fact
app.get('/fax/:id', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var id= req.params.id;
    var sql = "SELECT * FROM `qn-ans` Where qnID = " + id + ";";
    con.query(sql, function (err, result) {
      if (err) throw err;
      const t1 = performance.now();
      result.push(t1 - t0);
      res.send(result);
    });
  });
  const t1 = performance.now();
  console.log(`fax ${t1 - t0} milliseconds.`);
})


app.get('/tabl', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var sql = "SHOW TABLES;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log("test", result);
      /*const t1 = performance.now();
      result.push(t1 - t0);*/
      res.send(result);
    });
  });
  
  const t1 = performance.now();
  console.log(`catagorys ${t1 - t0} milliseconds.`);
})

app.get('/qn/:id', function(req, res){
  const t0 = performance.now();
  // res.send('id: ' + req.params.id); 
  var id= req.params.id;
  var sql2 = 'SELECT * FROM `qn` WHERE`qn`.`theme` = "' + id + '" ORDER BY RAND() LIMIT 10;';
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

app.get('/time/start', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    var time = new Date().getTime();
    var id = (time + "" + Math.floor(Math.random() * 1000) + 1 - 1).toString(16)
    //console.log(time + " " + id)
    var sql = "INSERT INTO `time` (`id`, `TimestampStarted`) VALUES ('" + id + "', '" + time + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log(result)
      res.send(JSON.parse('{"id":"' + id + '"}'));
    });
  });
})

app.get('/time/:qnid/:qnno/:awns/:id', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    var time = new Date().getTime();
    var qnid= req.params.qnid;
    var qnno= req.params.qnno;
    var awns= req.params.awns;
    var id= req.params.id;
    var sql = "UPDATE `time` SET `qn" + qnno + "`='" + qnid + "',`qn" + qnno + "awns`='" + awns + "',`qn" + qnno + "Timestamp`='" + time + "' WHERE `id` = '" + id + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result)
      res.send(JSON.parse('{"id":"' + id + '"}'));
    });
  });
})
// you shold understand this atleast
app.listen(port, () => {
  console.log(`ip:${port}`);
  console.log('done')
})