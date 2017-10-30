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
var signUp = require('./src/routes/sign-up/sign-up');
var writePost = require('./src/routes/write-post/write-post');
var getPosttList = require('./src/routes/get-post-list/get-post-list');

app.use(header());

//body parser
app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());

//end points
app.post('/post-test', postTest);
app.get('/get-test/:getData', getTest);
app.post('/login', login);
app.post('/sign-up', signUp);
app.post('/write-post', writePost);
app.get('/get-post-list/:category', getPosttList);

//server start
app.listen(port, () => {
    console.log(`express app listening on port ${port}!`);
});