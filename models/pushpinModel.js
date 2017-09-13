var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var pushpinModel = new Schema({
    title: {type: String},
    lat: {type: Number },
    lon: {type: Number }, 
    description: {type: String}, 
    author: {type: String}, 
    asset: {type: String}
});

module.exports = mongoose.model('Pushpin', pushpinModel); 