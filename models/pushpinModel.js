var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var pushpinModel = new Schema({
    lat: {type: Float32Array },
    lon: {type: Float32Array}, 
    title: {type: String},
    description: {type: String}, 
    author: {type: String}, 
    asset: {type: String}
});

module.exports = mongoose.model('Pushpin', pushpinModel); 