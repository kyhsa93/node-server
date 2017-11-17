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
var signUp = require('./src/routes/sign-up-data/sign-up');
var writeContent = require('./src/routes/write-content/write-content');
var getContentsList = require('./src/routes/get-contents-list/get-contents-list');
var myPageData = require('./src/routes/sign-up-data/select-data');
var updateSignUp = require('./src/routes/sign-up-data/update-data');
var selectContent = require('./src/routes/write-content/select-content');
var updateContent = require('./src/routes/write-content/update-content');
var findAccount = require('./src/routes/sign-up-data/find-account');

app.use(header());

//body parser
app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());

//end points
app.post('/post-test', postTest);
app.get('/get-test/:getData', getTest);
app.post('/login', login);
app.post('/sign-up', signUp);
app.post('/write-content', writeContent);
app.get('/get-contents-list/:category', getContentsList);
app.get('/select-sign-up-data/:id', myPageData);
app.post('/update-sign-up-data', updateSignUp);
app.get('/select-content/:seq', selectContent);
app.post('/update-content', updateContent);
app.post('/find-account', findAccount);

//server start
app.listen(port, () => {
    console.log(`express app listening on port ${port}!`);
});
