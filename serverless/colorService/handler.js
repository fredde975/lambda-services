'use strict';
var HashMap = require('hashmap');

var colorMap = new HashMap();
colorMap
    .set(1, "yellow")
    .set(2, "blue")
    .set(3, "black");

module.exports.color = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You got color:' + getColor() ,
      input: event,
    }),
  };



  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


function getColor(){
   colorMap.get(1);
}