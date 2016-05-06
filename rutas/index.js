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
    var rol = require('../controller/RolController.js')(app);
    
    
    /*
        Ruta primaria
    */
    ruta.get('/',function(peticion,respuesta){
		respuesta.send("Servicio iniciado");
	});
    /*
        Rutas Usuario
    */
    ruta.post('/usuario',usuario.signup);
    ruta.post('/usuario',usuario.login);
    ruta.get('/usuario',usuario.list);
    ruta.put('/usuario',usuario.edit);
    ruta.delete('/usuario',usuario.delete);
    ruta.get('/usuario/:id',usuario.find);
    
    /*
        Rutas Departamento
    */
    ruta.get('/departamento', departamento.list);
    ruta.post('/departamento', departamento.add);
    ruta.put('/departamento', departamento.edit);
    ruta.delete('/departamento', departamento.delete);
    ruta.get('/departamento/:id', departamento.superList);
    
    
    /*
        Rutas Comentario
    */
    ruta.get('/comentario', comentario.list);
    ruta.post('/comentario', comentario.add);
    ruta.put('/comentario', comentario.edit);
    ruta.delete('/comentario', comentario.delete);
    ruta.get('/comentario/:id', comentario.find);
    
    
    
    /*
        Rutas Lugar
    */
    ruta.get('/lugar', lugar.list);
    ruta.post('/lugar', lugar.add);
    ruta.put('/lugar', lugar.edit);
    ruta.delete('/lugar', lugar.delete);
    ruta.get('/lugar/:id', lugar.find);
    ruta.get('/lugar/:id/hoteles', lugar.lugarHoteles);
    ruta.get('/lugar/:id/comentarios', lugar.lugarComentarios);
    
    
    /*
        Rutas Imagen
    */
    ruta.get('/imagen', imagen.list);
    ruta.post('/imagen', imagen.add);
    ruta.put('/imagen', imagen.edit);
    ruta.delete('/imagen', imagen.delete);
    ruta.get('/imagen/:id', imagen.find);
    
    
    
    
    /*
        Rutas Hotel
    */
    ruta.get('/hotel', hotel.list);
    ruta.post('/hotel', hotel.add);
    ruta.put('/hotel', hotel.edit);
    ruta.delete('/hotel', hotel.delete);
    ruta.get('/hotel/:id', hotel.find);
    
    /*
        Rutas Rol
    */
    
    ruta.get('/rol', rol.list);
    ruta.get('/rol/:id', rol.rolUsuarios);
    return ruta;
});

