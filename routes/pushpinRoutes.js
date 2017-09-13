var express = require('express'); 

var routes = function(Pushpin){

    var pushpinRouter = express.Router(); 

    pushpinRouter.route('/')
    .post(function (req, res){
        var pushpin = new Pushpin(req.body);

        pushpin.save(); 
        res.status(201).send(pushpin); 
    })
    .get(function (req, res){
        var query = {}; 
        Pushpin.find(query, function(err, pushpins){
            if(err){
                res.status(500).send(err);
            } else {
                res.json(pushpins); 
            }
        })
    })
}