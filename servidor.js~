(function(){
	var express=require('express');
	var bodyParser=require('body-parser');
	var morgan=require('morgan');
	var mysql=require('mysql');
	var Sequelize = require('sequelize');
    var sequelize = new Sequelize('db_turismo','root','',{
        host: 'localhost',
        dialect: 'mysql',
        pool:{
            max: 20,
            min: 0,
            idle: 10000           
        }
    });
    
    /*
        Modelos
    */
    
    var Rol = sequelize.define('rol',{
        idRol: {type: Sequelize.INTEGER, field: 'idRol', primaryKey: true, autoIncrement: true},
        nombre:{type: Sequelize.STRING, field: 'nombre', allowNull : false}
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    var Usuario = sequelize.define('usuario', {
        idUsuario: { type: Sequelize.INTEGER, field: 'idUsuario', primaryKey: true, autoIncrement: true},
        nick: { type: Sequelize.STRING, field: 'nick', allowNull : false},
        nombre:{type: Sequelize.STRING, field: 'nombre', allowNull : false},
        correo:{type: Sequelize.STRING, field: 'correo', allowNull : false},
        contraseña:{type: Sequelize.STRING, field: 'contraseña', allowNull : false},
        idRol : {type: Sequelize.INTEGER , references:{
            model : Rol,
            key: 'idRol'
        }, allowNull: false}
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    var Departamento = sequelize.define('departamento',{
        idDepartamento: {type: Sequelize.INTEGER, field: "idDepartamento", primaryKey: true , autoIncrement: true},
        nombre:{type: Sequelize.STRING, field: 'nombre', allowNull : false},
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    var LugarTuristico = sequelize.define('lugarTuristico',{
        idLugarTuristico :{type: Sequelize.INTEGER, field : 'idLugarTuristico', primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, field: 'nombre', allowNull: false},
        direccion:{type: Sequelize.STRING, field: 'direccion', allowNull : false},
        descripcion:{type: Sequelize.STRING, field: 'descripcion', allowNull : false},
        idDepartamento : {type: Sequelize.INTEGER , references:{
            model : Departamento,
            key: 'idDepartamento'
        }, allowNull: false}
    },{
        freezeTableName: true,
        timestamps: false
    });
    
    var Comentario = sequelize.define('comentario',{
        idComentario: {type: Sequelize.INTEGER, field : 'idComentario', primaryKey: true, autoIncrement: true},
        contenido:{type: Sequelize.STRING, field: 'contenido', allowNull : false},
        idUsuario : {type: Sequelize.INTEGER , references:{
            model : Usuario,
            key: 'idUsuario'
        }},
        idLugarTuristico : {type: Sequelize.INTEGER , references:{
            model : LugarTuristico,
            key: 'idLugarTuristico'
        }, allowNull: false}
    },{
        freezeTableName: true,
        timestamps: false
    })
    
    var Imagen = sequelize.define('imagen', {
        idImagen : {type: Sequelize.INTEGER, field : 'idImagen', primaryKey: true, autoIncrement: true},
        contenido: {type: Sequelize.STRING, field : 'contenido', allowNull : false},
        idLugarTuristico: {type: Sequelize.INTEGER , references:{
            model : LugarTuristico,
            key: 'idLugarTuristico'
        }}
    },{
        freezeTableName: true,
        timestamps: false
    })
    
    var Hotel = sequelize.define('hotel',{
        idHotel:{type: Sequelize.INTEGER, field: 'idHotel', primaryKey: true, autoIncrement: true},
        nombre:{type: Sequelize.STRING, field: 'nombre', allowNull: true},
        idLugarTuristico : {type: Sequelize.INTEGER , references:{
            model : LugarTuristico,
            key: 'idLugarTuristico'
        }}
    },{
        freezeTableName: true,
        tiemstamps: false
    })
    
    /*
        Relaciones
    */
    Departamento.hasMany(LugarTuristico,{foreignKey: 'idDepartamento'}, { constraints: true });
    LugarTuristico.belongsTo (Departamento,{foreignKey: 'idDepartamento'}, { constraints: true });
    
    Rol.hasMany(Usuario, {foreignKey: 'idRol'},{ constraints: true });
    Usuario.belongsTo(Rol, {foreignKey: 'idRol'},{ constraints: true });
    
    Usuario.hasMany(Comentario,{foreignKey: 'idUsuario'},{ constraints: true });
    Comentario.belongsTo(Usuario,{foreignKey: 'idUsuario'},{ constraints: true });
    
    LugarTuristico.hasMany(Comentario,{foreignKey: 'idLugarTuristico'},{ constraints: true });
    Comentario.belongsTo(LugarTuristico,{foreignKey: 'idLugarTuristico'},{ constraints: true });
    
    LugarTuristico.hasMany(Imagen,{foreignKey: 'idLugarTuristico'}, { constraints: true });
    Imagen.belongsTo(LugarTuristico,{foreignKey: 'idLugarTuristico'},{ constraints: true });
    
    LugarTuristico.hasMany(Hotel,{foreignKey: 'idLugarTuristico'}, { constraints: true });
    Hotel.belongsTo(LugarTuristico,{foreignKey: 'idLugarTuristico'},{ constraints: true });
    
    sequelize.sync({force: false})
    var puerto=3000;
	var conf=require('./config');
	var app=express();
	app.use(bodyParser.urlencoded({
		extended:true
	}));
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	app.use('/api/v1',require('./rutas')(app));
    
    /*
        App setters
    */
    app.set('departamento',Departamento);
    app.set('usuario',Usuario);
    app.set('lugarTuristico', LugarTuristico);
    app.set('comentario', Comentario);
    app.set('imagen', Imagen);
    app.set('hotel', Hotel);
    app.set('rol', Rol);
    
    
    app.listen(puerto,function(){
		console.log("Servidor iniciado en el puerto: " + puerto);
	});
    
})();