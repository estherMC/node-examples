var Bicicleta = require ('../models/bicicleta');

exports.bicicleta_list = function (req, res){
    //La ruta a renderitzar haurà d'estar a views/bicicletas/index
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post = function(req, res){
    bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);

    res.redirect('/bicicletas');
}

exports.bicicleta_update_get = function(req, res){
    var bici = Bicicleta.findById(req.params.id);

    res.render('bicicletas/update', {bici});
}

exports.bicicleta_update_post = function(req, res){
    bici = Bicicleta.findById(req.params.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];
    res.redirect('/bicicletas');
}

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.body.id);

    res.redirect('/bicicletas');
}

exports.bicicleta_detalle_get = function(req, res){
    var bici = Bicicleta.findById(req.params.id);
    
    res.render('bicicletas/detalle', {bici});
}