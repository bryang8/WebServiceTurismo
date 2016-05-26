module.exports = function(app){
    return {
        add:function(req,res){
            var Imagen = app.get('imagen');
            Imagen.create({
                contenido: req.body.contenido,
                idLugarTuristico: req.body.idLugarTuristico
            }).then(function(imagen){
               res.json(imagen); 
            });
        },
        list:function(req,res){
            var Imagen = app.get('imagen');
            Imagen.findAll().then(function(imagenes){
                res.json(imagenes);
            });
        },
        edit:function(req,res){
            var Imagen = app.get('imagen');
            Imagen.findById(req.body.idIamgen).then(function(imagen){
                if(imagen){
                    imagen.updateAttributes({
                        contenido: req.body.contenido,
                        idLugarTuristico: req.body.idLugarTuristico
                    }).then(function(imagen){
                        res.json(imagen);
                    });
                }
            })
        },
        delete:function(req,res){
            var Imagen = app.get('imagen');
            Imagen.destroy({
               where: {
                   idImagen: req.body.idImagen
               } 
            });
            Imagen.findAll().then(function(imagenes){
                res.json(imagenes);
            });
        },
        find:function(req,res){
            var Imagen = app.get('imagen');
            Imagen.findById(req.body.idImagen).then(function(imagen){
                if(imagen){
                    res.json(imagen);
                }
            })
        }
    }
}