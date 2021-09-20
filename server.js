const express = require('express');
const app = express();

const server = app.listen(3000, () =>{
    console.log('Start Server : localhost:3000');
});

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);



app.get('/', function(req, res){

    res.render('index.html')

})

app.get('/about', function(req, res){

    res.render('about.html')

})

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'alstjr5587',
  database        : 'testdatabases'
});
 
pool.query('SELECT * from testtb', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.get('/db', function(req, res){

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * from testtb', function (error, results, fields) {
          // When done with the connection, release it.
          res.send(JSON.stringify(results));//화면에 db데이터를 json형식으로 표시
          console.log(results);
         
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})