(function(){
	var express=require('express');
	var bodyParser=require('body-parser');
	var morgan=require('morgan');
    
	var mysql=require('mysql');
	var puerto=3000;
	var conf=require('./config');
	var pool=mysql.createPool(conf.database);
	var app=express();
	app.set('pool',pool);
	app.use(bodyParser.urlencoded({
		extended:false
	}));
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	app.use('/api/v1',require('./rutas')(app));

	app.listen(puerto,function(){
		console.log("Servidor iniciado en el puerto: "+puerto);
	});
    
    var Usuario = sequelize.define('usuario', {
        idUsuario: { type: Sequelize.STRING, field: 'idUsuario', primaryKey: true, autoIncrement: true},
        nick: { type: Sequelize.STRING, field: 'nick'},
        nombre:{type: Sequelize.STRING, field: 'nombre'},
        correo:{type: Sequelize.STRING, field: 'correo'},
        contraseña:{type: Sequelize.STRING, field: 'contraseña'}
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    var Departamento = sequelize.define('departamento',{
        idDepartamento: {type: Sequelize.STRING, field: "idDepartamento", primaryKey: true , autoIncrement: true},
        nombre:{type: Sequelize.STRING, field: 'nombre'},
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    var LugarTuristico = sequelize.define('lugarTuristico',{
        idLugarTuristico :{type: Sequelize.STRING, field : 'idLugarTuristico', primaryKey: true, autoIncrement: true},
        direccion:{type: Sequelize.STRING, field: 'direccion'},
        descripcion:{type: Sequelize.STRING, field: 'descripcion'},
        idDepartamento : {type: Sequelize.STRING , references:{
            model : Departamento,
            key: idDepartamento
        }}
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    sequelize.sync({force: true})
})();