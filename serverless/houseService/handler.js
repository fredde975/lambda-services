'use strict';
let firstHouse = require('./firstHouse');
let secondHouse = require('./secondHouse');

let aws = require('aws-sdk');
let db = new aws.DynamoDB();

let REGION = process.env.REGION;
let TABLE_NAME = process.env.DYNAMODB_TABLE;

aws.config.update({region: REGION});
let dynamodb = new aws.DynamoDB({apiVersion: '2012-08-10', region: REGION});


module.exports.firstHouse = (event, context, callback) =>{
    console.log("Region:" + REGION);
    console.log("Table:" + TABLE_NAME);
    console.log("event:" + event);

    const timestamp = new Date().getTime();
   // const house_key =  `<p>Hey ${event.queryStringParameters.myKey}!</p>`;
    //const familyName = `<p>Hey ${event.queryStringParameters.name}!</p>`;

   // const params = {
   //     TableName: TABLE_NAME,
   //     Item: {
   //         house_key: house_key,
   //         familyName: familyName
   //     },
   // };

    //let message = "key: " + house_key + " familyName: " + familyName + " timestamp: " + timestamp;
    //console.log(message);
    let response = firstHouse.firstHouseResponse();

    callback(null, response);
};


module.exports.secondHouse = (event, context, callback) =>{
    console.log("second house");
    var response = secondHouse.secondHouseResponse();
    callback(null, response);
};
