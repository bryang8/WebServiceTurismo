var jwt=require('jsonwebtoken');
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
            }).then(function(data){
                res.json(genToken(data));
            }).error(function(err){
                respuesta.send({"message":"Error"+err,"status":"500"});
            });
		},
        tokenGenerator:function(req,res){
            var token=jwt.sign({company:'Kinal'},'S3CUR3@APP')
            res.send(token);
        },
        tokenMiddleware:function(req,res){
            var token=req.headers['x-access-token'] || req.body.token || req.query.token;
            if (token){
                jwt.verify(token,'S3CUR3@APP',function(error,decoded){
                    if(err){
                        return res.status(403).send({
                            success:false,
                            message:'Fallo al validar token'
                        });
                    }
                    req.user=decoded;
                    next();
                });
            }else{
                return res.status(403).send({
                    success:false,
                    message:'No se proporciono Token'
                })
            }
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
function expiresIn(días){
    var dateObj=new Date();
    return dateObj.setDate(dateObj.getDate()+días);
}
function genToken(user){
    var payload=jwt.sign({
        "company":"kinal"
    },
      'S3CUR3@APP');
    var token={
        "token":payload,
        "user":user,
        "exp":expiresIn(1)
    }
    return token;
}