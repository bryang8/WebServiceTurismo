var ruta=require('express').Router();
module.exports=(function(app){
	/*
        Variables
    */
    var usuario=require('../controller/UsuarioController.js')(app);
    var departamento = require('../controller/DepartamentoController.js')(app);
    var lugar = require('../controller/LugarController.js')(app);
    
    /*
        Ruta primaria
    */
    ruta.get('/',function(peticion,respuesta){
		respuesta.send("Servicio iniciado");
	});
    /*
        Rutas Usuario
    */
    ruta.post('/usuario/signup',usuario.signup);
    ruta.post('/usuario/login',usuario.login);
    ruta.get('/usuario/list',usuario.list);
    ruta.put('/usuario/edit',usuario.edit);
    ruta.delete('/usuario/delete',usuario.delete);
    ruta.get('/usuario/find',usuario.find);
    
    /*
        Rutas Departamento
    */
    ruta.get('/departamento/list', departamento.list);
    ruta.post('/departamento/add', departamento.add);
    ruta.put('/departamento/edit', departamento.edit);
    ruta.delete('/departamento/delete', departamento.delete);
    ruta.get('/departamento/superList', departamento.superList);
    
    
    /*
        Rutas Lugares Turisticos
    */
    ruta.get('/lugar/list', lugar.list);
    ruta.post('/lugar/add', lugar.add);
    ruta.put('/lugar/edit', lugar.edit);
    ruta.delete('/lugar/delete', lugar.delete);
    
    return ruta;
});

