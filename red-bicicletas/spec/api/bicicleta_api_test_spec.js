var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server  = require('../../bin/www');
const { allBicis } = require('../../models/bicicleta');

describe('Bicicleta API', () => {
    describe ('GET BICICLETAS /', () => {
        it('Status 200', () => {
             expect(Bicicleta.allBicis.length).toBe(0);
            
            var a = new Bicicleta(1, 'negro', 'urbana', [41.1194669, 1.2452413]);
            Bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });

        });
    });

    describe('POST Bicicleta /create', () => {
        it('Status 200', (done) => {
            
            var headers = {'content-type' : 'application/json'};
            var aBici = '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": 41.12, "lng": 1.24 }';

            request.post({
                headers : headers,
                url: "http://localhost:3000/api/bicicletas/create",
                body: aBici

                }, function(error, response, body){
                    expect(response.statusCode).toBe(200);
                    expect(Bicicleta.findById(10).color).toBe("rojo");
                    done();
            });

        });
    });

    describe('POST Bicicleta /update', () => {
        it('Status 200', (done) => {
            
            var bici = new Bicicleta("20", "violeta", "urbana", "l");
            bici.ubicacion = [41.12, 1.24];
            Bicicleta.add(bici);
            expect(Bicicleta.findById(20).color).toBe("violeta");

            var headers = {'content-type' : 'application/json'};
            var aBici = '{ "id": 20, "color": "negro", "modelo": "urbana", "lat": 41.12, "lng": 1.24 }';

            request.post({
                headers : headers,
                url: "http://localhost:3000/api/bicicletas/update",
                body: aBici

                }, function(error, response, body){
                    expect(response.statusCode).toBe(200);
                    expect(Bicicleta.findById(20).color).toBe("negro");
                    done();
            });
        });
    });

    describe('POST Bicicleta /delete', () => {
        it('Status 200', (done) => {
            
            var bici = new Bicicleta("20", "violeta", "urbana", "l");
            bici.ubicacion = [41.12, 1.24];
            Bicicleta.add(bici);
            expect(Bicicleta.allBicis.length).toBe(1);

            var headers = {'content-type' : 'application/json'};
            var aBici = '{ "id": 20 }';

            request.post({
                headers : headers,
                url: "http://localhost:3000/api/bicicletas/delete",
                body: aBici

                }, function(error, response, body){
                    expect(response.statusCode).toBe(204);
                    expect(Bicicleta.allBicis.length).toBe(0);                    
                    done();
            });
        });
    });
});