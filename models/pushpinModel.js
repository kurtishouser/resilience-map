var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var pushpinModel = new Schema({
//     title: {type: String},
//     lat: {type: Number },
//     lon: {type: Number }, 
//     description: {type: String}, 
//     author: {type: String}, 
//     asset: {type: String}
// });

var pushpinModel = new Schema({
    loc: {
        bounds: [{
            type: Number
        }],
        x: { type: String },
        y: { type: String }
    },
    meta: {
        asset: { type: String },
        author: { type: String },
        description: { type: String },
        title: { type: String }
    }
});

module.exports = mongoose.model('Pushpin', pushpinModel);
