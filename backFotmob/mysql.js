
var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : 'database',
    database : 'fotmob2'
});
connection.connect();
connection.query('SELECT * FROM EXDATA', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    results = results.map(v => Object.assign({}, v));
    var jsonResults = JSON.stringify(results);
    console.log(jsonResults);
    fs.writeFileSync("nowLog.json",jsonResults);
});



connection.end();
//please start code in 
