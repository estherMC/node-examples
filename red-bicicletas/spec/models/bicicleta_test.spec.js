var Bicicleta = require('../../models/bicicleta');

beforeEach(() => { Bicicleta.allBicis = []; });
// beforeEach(function(){console.log(‘testeando…’); });

describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        
        var a = new Bicicleta (1, 'roja', 'urbana', [41.1183669,1.2451213]);
        
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);

    });
});

describe('Bicicleta.findById', () => {
    it('debe devolver la bici con id 1', () => {
        //Bicicleta.allBicis=[]; --> Sustituimos por el beforeEach inicial
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici1 = new Bicicleta(1, "verde", "urbana");
        var aBici2 = new Bicicleta(2, "rojo", "montaña");
      
        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici1.color);
        expect(targetBici.modelo).toBe(aBici1.modelo);
    });
});

describe('Bicicleta.removeById', () => {
    it('debe eliminar la bici con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici1 = new Bicicleta(1, "verde", "urbana");
        var aBici2 = new Bicicleta(2, "rojo", "montaña");

        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);

        expect(Bicicleta.allBicis.length).toBe(2);

        Bicicleta.removeById(1);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0].id).toBe(2);

    });
});