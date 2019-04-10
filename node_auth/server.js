var express = require('express')
var router = require('./route/router')(express)
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express()

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cookieParser());
    
app.use('/', router)

app.listen(8000, ()=>{
    console.log("running on port 8000")
})


