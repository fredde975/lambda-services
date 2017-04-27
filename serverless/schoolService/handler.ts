import * as _ from 'lodash';
import {IResponse, ICallback2, IEventPayload} from "./models";

export async function hello(event :any , context :any , callback :ICallback2 ) {

    // dependencies work as expected
   console.log(_.VERSION);
    console.log("the type of the callback is: " + (typeof callback));

     //async/await also works out of the box
//    await new Promise((resolve, reject) => setTimeout(resolve, 500));

    const response :IResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);
};


export async function retrieveSchool(event :any , context :any , callback :ICallback2 ) {

    // dependencies work as expected
    console.log(_.VERSION);
    console.log("the type of the callback is: " + (typeof callback));


    const response :IResponse = {
        statusCode: 200,
        body: JSON.stringify({
            school: "a school"
        }),
    };

    callback(null, response);
};