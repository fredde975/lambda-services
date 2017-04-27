"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var _ = require('lodash');
function hello(event, context, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        // dependencies work as expected
        console.log(_.VERSION);
        console.log("the type of the callback is: " + (typeof callback));
        //async/await also works out of the box
        //    await new Promise((resolve, reject) => setTimeout(resolve, 500));
        var response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            }),
        };
        callback(null, response);
    });
}
exports.hello = hello;
;
function retrieveSchool(event, context, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        // dependencies work as expected
        console.log(_.VERSION);
        console.log("the type of the callback is: " + (typeof callback));
        var response = {
            statusCode: 200,
            body: JSON.stringify({
                school: "a school"
            }),
        };
        callback(null, response);
    });
}
exports.retrieveSchool = retrieveSchool;
;
