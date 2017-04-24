//'use strict';
console.log('Starting lambda function');

var AWS = require('aws-sdk');
var REGION = process.env.REGION_ENV;
var tableName = process.env.TABLE_NAME_ENV;


AWS.config.update({region: REGION});
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10', region: REGION});


module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully! ' +
      'region:' + REGION + ' table: ' + tableName,
      input: event,
    }),
  };



  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
