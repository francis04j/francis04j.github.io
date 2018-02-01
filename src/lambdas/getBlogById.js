'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();


/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    var queryValue = parseInt(event.queryStringParameters.Id);
    var params = {
        TableName: 'ProductCatalog',                
        KeyConditionExpression: 'Id = :id',       
        ExpressionAttributeValues: {
            ':id': queryValue
        }              
    };
    dynamo.query(params, done);

    // switch (event.httpMethod) {
    //     case 'DELETE':
    //         dynamo.deleteItem(JSON.parse(event.body), done);
    //         break;
    //     case 'GET':
    //         var params = {
    //             TableName: event.queryStringParameters.TableName,                
    //             KeyConditionExpression: '#Name = :name',
    //             ExpressionAttributeNames: {
    //                 '#Name': 'Name'
    //             },
    //             ExpressionAttributeValues: {
    //                 ':name': 'Amazon DynamoDB'
    //             }              
    //         };
    //         dynamo.query(params, done);
          
    //        // dynamo.query({ TableName: event.queryStringParameters.TableName }, done);
    //         break;
    //     case 'POST':
    //         dynamo.putItem(JSON.parse(event.body), done);
    //         break;
    //     case 'PUT':
    //         dynamo.updateItem(JSON.parse(event.body), done);
    //         break;
    //     default:
    //         done(new Error(`Unsupported method "${event.httpMethod}"`));
    // }
};
