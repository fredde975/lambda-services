"use strict";
function hello(event, context, callback) {
    console.log("loggar lite");
    console.log(`Method: ${event.method}`);
    console.log(`Param: ${event.query.foo}`);
    callback(undefined, {
        message: `Method: , Param: `,
        event: event
    });
}
exports.hello = hello;
/*

callback(undefined, {
    message: `Method: ${event.method}, Param: ${event.query.foo}`,
    event: event
});*/
