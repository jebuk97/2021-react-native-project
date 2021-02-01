
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var dateutils = require('date-utils');
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio.listen(server)

//포트 
const port = process.env.PORT || 3001;

server.listen(3001,()=>console.log('Server Started at 3001'));

//sql 접속
var mysql = require('mysql');
var mysqlLoader = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : 'jeon0826',
    database : 'fotmob2'
});

app.use(bodyParser.json());

//포스트
app.post('/newChat', function (req, res) {
    console.log("connected sucess");
    var newDate = new Date();
    var time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');
    var sql = 'INSERT INTO EXDATA(DESCRIPTION,NICKNAME,TEAMNAME,GAMEID,GAMEDATE) VALUES (?)';
    var values = [req.body.text,req.body.name,req.body.targetTeam,req.body.id,time];
    mysqlLoader.query(sql,[values],function(err,result){
        if(err) throw err;         
    });
    io.on('connection', (socket) => {
        console.log('socket connected');
        socket.on('chatUpdate', (msg) => {
            console.log(msg);


            io.emit('chatUpdate', 'hello');
        })
    });
    // app.io.on(req.body.id,function(){
    //     console.log('socket');
    //     toJSON = JSON.stringify(req.body);
    //     app.io.emit('chatUpdate',toJSON);
    // });
    console.log(req.body);
    res.send("Complete");
});
    


app.get('/chat', (req, res) => {
    var nowID = req.query.id;
    var nowPage = req.query.page - 1;
    nowPage = nowPage * 10;
//1빼는 이유 -- 클라이언트에서 1부터 시작 서버는 0부터 시작
    mysqlLoader.query('SELECT * FROM (SELECT * FROM EXDATA WHERE GAMEID='+nowID+' ORDER BY ID DESC) TEMPLIST'+' LIMIT '+nowPage+',10',function(err,result){
    if(err){
        console.log("chat error "+err+' : SELECT * FROM EXDATA WHERE GAMEID='+nowID+' LIMIT '+nowPage+',10');
        res.send("/chat Error Occur");    
    }
    else
    {   
        res.json(result);
    }
    });
});



