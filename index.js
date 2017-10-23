'use strict'

//서버 환경 설정
var port = 5000;

var express = require('express');
var bparser = require('body-parser');

var app = express();

// midleware
var header = require('./src/middleware/header');

//routes
var postTest = require('./src/routes/post-test/post-test');
var getTest = require('./src/routes/get-test/get-test');
var login = require('./src/routes/login/login');

app.use(header());

//body parser
app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());

//end points
app.post('/post-test', postTest);
app.get('/get-test/:getData', getTest);
app.post('/login', login);

//server start
app.listen(port, () => {
    console.log(`express app listening on port ${port}!`);
});