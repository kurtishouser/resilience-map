var express = require('express'); 
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser'); 
require("dotenv").config(); 

var db = mongoose.connect(process.env.MONGO_CONNECTION_STRING); 

var app = express(); 
var Pushpin = require('./models/pushpinModel'); 

app.use(bodyParser.json()); 
app.use(boyParser.urlencoded({extended:true})); 

var pushpinRouter = require('./routes/pushpinRoutes')(Pushpin);

app.use('/api/pushpins', pushpinRouter); 

app.get('/', function(req, res){
    res.send('Welcome to my api'); 
});

app.listen(process.env.PORT || 3000, function(){
    console.log("App is running on" + process.env.PORT)
});