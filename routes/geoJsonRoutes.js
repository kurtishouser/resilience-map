var express = require('express');
var GeoJSON = require('geojson'); 

var routes = function (Pushpin){
    var geoJsonRouter = express.Router(); 

    geoJsonRouter.route('/')
    .get(function (req, res) {
        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Pushpin.find(query, function (err, pushpins) {
            if (err) {
                res.status(500).send(err);
            } else {
                // res.json(pushpins);
                res.json(GeoJSON.parse(pushpins, {Point: ['loc.y', 'loc.x']})); 
            }
        })
    });

    return geoJsonRouter 
};

module.exports = routes; 

