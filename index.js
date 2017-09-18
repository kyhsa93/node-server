'use strict'

//서버 환경 설정
var CONFIG = require('./src/config/config');
var port = CONFIG.port;

var express = require('express');
var bparser = require('body-parser');

var app = express();

//server start
app.listen(port, () => {
    console.log(`express app listening on port ${port}!`);
});