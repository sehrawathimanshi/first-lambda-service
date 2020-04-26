'use strict';
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'})

module.exports.helloWorld = (event, context, callback) => {
  console.log(AWS.config);
  
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      // accept: 'application/json'

    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
