var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session    = require('express-session');

var index = require('./routes/index');
//var users = require('./routes/users');
//var test = require('./routes/test');


//创建一个服务器应用
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

//静态页面
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
   secret: 'itcast-secret',
       name: 'itcast-name',
       cookie: {maxAge: 8000000000 },
       resave: false,
       saveUninitialized: true,
}));
app.use('/', index);
app.listen(3000);
module.exports = app;
