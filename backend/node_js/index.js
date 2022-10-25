const express = require('express')
const path = require('path');
const cors = require('cors');

var mysql = require('mysql');

const app = express()
app.use(cors())
const port = 3000

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wongly_informed-no"
});

app.get('/get', (req, res) => {
  const t0 = performance.now();
  con.connect(function(err) {
    //console.log("Connected!");
    var sql = "SELECT * FROM `qn-kri`, `qn-ans-kri` WHERE `qn-kri`.qnID = `qn-ans-kri`.`qnID` ORDER BY RAND() LIMIT 10;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log("test", result);
      res.send(result)
    });
  });
  const t1 = performance.now();
  console.log(`get ${t1 - t0} milliseconds.`);
})
//legg til database
app.get('/qn/:id', function(req, res){
  const t0 = performance.now();
  // res.send('id: ' + req.params.id); 
  var id= req.params.id
  var sql2 = "SELECT * FROM `qn-" + id + "`, `qn-ans-" + id + "` WHERE `qn-" + id + "`.qnID = `qn-ans-" + id + "`.`qnID` ORDER BY RAND() LIMIT 10;";
  con.query(sql2, function (err, result) {
    if (err){
      res.send("failed to get gud")
    }
    //console.log("test", result);
    res.send(result)
  });
  const t1 = performance.now();
  console.log(`get ${t1 - t0} milliseconds. fra qn-` + id);
});

app.listen(port, () => {
  console.log(`ip:${port}`)
})