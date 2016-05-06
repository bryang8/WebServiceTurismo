module.exports = function(app){
    return {
        add:function(req,res){
            var Hotel = app.get('hotel');
            Hotel.create({
                nombre: req.body.nombre,
                idLugarTuristico: req.body.idLugarTuristico
            }).then(function(imagen){
               res.json(imagen); 
            });
        },
        list:function(req,res){
            var Hotel = app.get('hotel');
            Hotel.findAll().then(function(imagenes){
                res.json(imagenes);
            });
        },
        edit:function(req,res){
            var Hotel = app.get('hotel');
            Hotel.findById(req.body.idHotel).then(function(hotel){
                if(hotel){
                    hotel.updateAttributes({
                        nombre: req.body.nombre,
                        idLugarTuristico: req.body.idLugarTuristico
                    }).then(function(hotel){
                        res.json(hotel);
                    });
                }
            })
        },
        delete:function(req,res){
            var Hotel = app.get('hotel');
            Hotel.destroy({
               where: {
                   idHoteln: req.body.idHotel
               } 
            });
            Hotel.findAll().then(function(hoteles){
                res.json(hoteles);
            });
        },
        find:function(req,res){
            var Hotel = app.get('hotel');
            Hotel.findById(req.body.idHotel).then(function(hotel){
                if(hotel){
                    res.json(hotel);
                }
            })
        }
    }
}