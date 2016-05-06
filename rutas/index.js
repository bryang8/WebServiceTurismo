var ruta=require('express').Router();
module.exports=(function(app){
	/*
        Variables
    */
    var usuario=require('../controller/UsuarioController.js')(app);
    var departamento = require('../controller/DepartamentoController.js')(app);
    var lugar = require('../controller/LugarController.js')(app);
    var comentario = require('../controller/ComentarioController.js')(app);
    var imagen = require('../controller/ImagenController.js')(app);
    var hotel = require('../controller/HotelController.js')(app);
    
    
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
    ruta.get('/comentario/list', comentario.list);
    ruta.post('/comentario/add', comentario.add);
    ruta.put('/comentario/edit', comentario.edit);
    ruta.delete('/comentario/delete', comentario.delete);
    ruta.get('/comentario/find', comentario.find);

    
    /*
        Rutas Comentarios
    */
    ruta.get('/lugar/list', lugar.list);
    ruta.post('/lugar/add', lugar.add);
    ruta.put('/lugar/edit', lugar.edit);
    ruta.delete('/lugar/delete', lugar.delete);
    ruta.get('/lugar/find', lugar.find);
    
    
    
    /*
        Rutas Imagen
    */
    ruta.get('/imagen/list', imagen.list);
    ruta.post('/imagen/add', imagen.add);
    ruta.put('/imagen/edit', imagen.edit);
    ruta.delete('/imagen/delete', imagen.delete);
    ruta.get('/imagen/find', imagen.find);
    
    
    
    
    /*
        Rutas Hotel
    */
    ruta.get('/hotel/list', hotel.list);
    ruta.post('/hotel/add', hotel.add);
    ruta.put('/hotel/edit', hotel.edit);
    ruta.delete('/hotel/delete', hotel.delete);
    ruta.get('/hotel/find', hotel.find);
    
    return ruta;
});

