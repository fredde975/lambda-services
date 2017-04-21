import { ICallback, IEventPayload } from './models';

 export function hello(event: IEventPayload, context, callback: ICallback) {
     console.log("loggar lite");
     console.log(`Method: ${event.method}`);
     console.log(`Param: ${event.query.foo}`);
     callback(undefined, {
         message: `Method: , Param: `,
         event: event
     });
}
/*

callback(undefined, {
    message: `Method: ${event.method}, Param: ${event.query.foo}`,
    event: event
});*/
