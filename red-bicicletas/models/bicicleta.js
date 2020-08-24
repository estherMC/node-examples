const { bicicleta_list } = require("../controllers/bicicleta");

    var Bicicleta = function (id, color, modelo, ubicacion) {
        this.id = id;
        this.color = color;
        this.modelo = modelo;
        this.ubicacion = ubicacion;
    }

    Bicicleta.prototype.toString = function () {
        return 'id: ' + this.id + ' | color: ' + this.color;
    }

    Bicicleta.allBicis = [];
    Bicicleta.add = function (aBici){
        Bicicleta.allBicis.push(aBici);
    }

    Bicicleta.findById = function(aBiciId){
        var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
        if (aBici)
            return aBici;
        else   
            throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
    }

    Bicicleta.removeById = function(aBiciId){
        //var aBici = Bicicleta.findById(aBiciId);
        for(var i = 0; i < Bicicleta.allBicis.length; i++){
            if (Bicicleta.allBicis[i].id == aBiciId){
                Bicicleta.allBicis.splice(i,1);
                break;
            }
        }
    }

    var a = new Bicicleta (1, 'azul', 'urbana', [41.1119578,1.245973]);
    var b = new Bicicleta (2, 'roja', 'urbana', [41.1183669,1.2451213]);

    Bicicleta.allBicis.push(a);
    Bicicleta.allBicis.push(b);

    module.exports = Bicicleta;