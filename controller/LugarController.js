module.exports = function(app){
    return {
        add:function(req,res){
            var Lugar = app.get('lugarTuristico');
            Lugar.create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                descripcion: req.body.descripcion,
                idDepartamento: req.body.idDepartamento
            }).then(function(lugar){
               res.json(lugar); 
            });
        },
        list:function(req,res){
            var Lugar = app.get('lugarTuristico');
            Lugar.findAll().then(function(lugares){
                res.json(lugares);
            });
        },
        edit:function(req,res){
            var Lugar = app.get('lugarTuristico');
            Lugar.findById(req.body.idLugarTuristico).then(function(lugar){
                if(lugar){
                    lugar.updateAttributes({
                        nombre: req.body.nombre,
                        direccion: req.body.direccion,
                        descripcion: req.body.descripcion,
                        idDepartamento: req.body.idDepartamento
                    }).then(function(lugar){
                        res.json(lugar);
                    });
                } else {
                    
                }
            })
        },
        delete:function(req,res){
            var Lugar = app.get('lugarTuristico');
            Lugar.destroy({
               where: {
                   idLugarTuristico: req.body.idLugarTuristico
               } 
            }).then(function(lugar){
                Lugar.findAll().then(function(lugares){
                    res.json(departamentoses);
                });
            });
        },
        find:function(req,res){
            var Lugar = app.get('lugarTuristico');
            Lugar.findById(req.params.id).then(function(lugar){
                if(lugar){
                    res.json(lugar);
                }
            })
        },
        lugarHoteles(req,res){
            var Hotel = app.get('hotel');
            var LugarTuristico = app.get('lugarTuristico');
            LugarTuristico.find({ where: {idLugarTuristico: req.params.id}, include: [Hotel]}).then(function(lugar){
                res.json(lugar);
            })
        },
        lugarComentarios(req,res){
            var Comentario = app.get('comentario');
            var LugarTuristico = app.get('lugarTuristico');
            LugarTuristico.find({ where: {idLugarTuristico: req.params.id}, include: [Comentario]}).then(function(lugar){
                res.json(lugar);
            })
        }
    }
}