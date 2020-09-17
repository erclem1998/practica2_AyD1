const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/suma';

describe("suma tests ", function() {
    var val={
        a:5,
        b:24
    }

    it('deberia dar 29 la suma entre los dos numeros', function (done) {
        request.post(endpoint, { json: true, body: val }, function (error, response) {
            console.log(response.body);
            expect(response.body).toEqual(29);
            done();
        });
    });
});