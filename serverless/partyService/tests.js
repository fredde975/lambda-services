"use strict";
const handler_1 = require('./handler');
const chai = require('chai');
const expect = chai.expect;
describe('hello function', () => {
    it('processes the query string', done => {
        const requestEvent = {
            method: 'GET',
            query: {
                foo: 'bar'
            }
        };
        handler_1.hello(requestEvent, {}, (err, result) => {
            expect(err).to.be.undefined;
            expect(result.event).to.equal(requestEvent);
            expect(result.message).to.equal('Method: GET, Param: bar');
            done();
        });
    });
});
