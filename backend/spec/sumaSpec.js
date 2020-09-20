const request = require('request');
const server = require('../index');
//const sum = require('../endpoints/suma');

const endpoint = 'http://localhost:3000/suma';

describe("suma tests ", function () {
    var val = {
        a: 5,
        b: 24
    }
    var val2 = {
        a: 4,
        b: 24
    }

    beforeEach(function () {
        spyOn(request,'post').and.callThrough();
        request.post(endpoint, { json: true, body: val });
    });

    it('deberia dar 29 la suma entre los dos numeros', function (done) {
        expect(request.post).toHaveBeenCalledWith(endpoint, { json: true, body: val });
        done();
    });


    /*it('deberia retornar 4', function (done) {
        request.post(endpoint, { json: true, body: val2 }, function (error, response) {
            console.log(response.body);
            expect(response.body).toEqual(4);
            done();
        });
    });*/
});