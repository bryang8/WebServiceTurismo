module.exports = function(app){
    return {
        add:function(req,res){
            var Comentario = app.get('comentario');
            Comentario.create({
                contenido: req.body.contenido,
                idUsuario: req.body.idUsuario,
                idLugarTuristico: req.body.idLugarTuristico
            }).then(function(lugar){
               res.json(lugar); 
            });
        },
        list:function(req,res){
            var Comentario = app.get('comentario');
            Comentario.findAll().then(function(lugares){
                res.json(lugares);
            });
        },
        edit:function(req,res){
            var Comentario = app.get('comentario');
            Comentario.findById(req.body.idComentario).then(function(comentario){
                if(comentario){
                    comentario.updateAttributes({
                        contenido: req.body.contenido,
                        idUsuario: req.body.idUsuario,
                        idLugarTuristico: req.body.idLugarTuristico
                    }).then(function(comentario){
                        res.json(comentario);
                    });
                }
            })
        },
        delete:function(req,res){
            var Comentario = app.get('comentario');
            Comentario.destroy({
               where: {
                   idComentario: req.body.idComentario
               } 
            });
        },
        find:function(req,res){
            var Comentario = app.get('comentario');
            Comentario.findById(req.body.idComentario).then(function(comentario){
                if(comentario){
                    res.json(comentario);
                }
            })
        }
    }
}