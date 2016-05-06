module.exports=function(app){
	return {
		signup:function(req,res){
			var Usuario = app.get("usuario");
            Usuario.create({
                nombre: req.body.nombre,
                correo: req.body.correo,
                nick: req.body.nick,
                contraseña: req.body.contraseña,
                idRol: req.body.idRol
            }).then(function (usuario){
               res.json(usuario); 
            });
		},
        login:function(req,res){
            var Usuario = app.get("usuario");
            Usuario.findAll({
                where:{nick: req.body.nick, contraseña: req.body.contraseña}
            }).then(function(usuarios){
              res.json(usuarios[0]); 
            })
		},
        list:function(req,res){
            var Usuario = app.get("usuario");
            Usuario.findAll().then(function(usuarios){
                res.json(usuarios);
            })
        },
        edit:function(req,res){
            var Usuario = app.get("usuario");
            Usuario.findById(req.body.idUsuario).then(function(departamento){
                if(departamento){
                    departamento.updateAttributes({
                        nombre: req.body.nombre,
                        nick: req.body.nick,
                        contraseña: req.body.contraseña,
                        correo: req.body.correo,
                        idRol: req.body.idRol
                    }).then(function(usuario){
                        res.json(usuario);
                    });
                } else {
                    
                }
            })
        },
        delete:function(req,res){
            var Usuario = app.get('usuario');
            
            Usuario.destroy({
               where: {
                   idUsuario: req.body.idUsuario
               } 
            }).then(function(usuario){
                Usuario.findAll().then(function(usuarios){
                    res.json(usuarios);
                })
            });
        },
        find:function(req,res){
           var Usuario = app.get('usuario');
            Usuario.findById(req.params.id).then(function(usuario){
                if(usuario){
                    res.json(usuario);
                }
            })
        }
    }
}