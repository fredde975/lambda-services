'use strict';
var firstHouse = require('./firstHouse');
var secondHouse = require('./secondHouse');


module.exports.firstHouse = (event, context, callback) =>{
    var response = firstHouse.firstHouseResponse();
    callback(null, response);
};


module.exports.secondHouse = (event, context, callback) =>{
    var response = secondHouse.secondHouseResponse();
    callback(null, response);
};
