module.exports = function(app){
    return {
        add:function(req,res){
            var Departamento = app.get('departamento');
            Departamento.create({
                nombre: req.body.nombre
            }).then(function(departamento){
               res.json(departamento); 
            });
        },
        list:function(req,res){
            var Departamento =app.get('departamento');
            Departamento.findAll().then(function(departamentos){
                res.json(departamentos);
            });
        },
        edit:function(req,res){
            var Departamento = app.get('departamento');
            Departamento.find(req.body.idDepartamento).then(function(departamento){
                if(departamento){
                    departamento.updateAttributes({
                        nombre: req.body.nombre
                    }).then(function(departamento){
                        res.json(departamento);
                    });
                } else {
                    
                }
            })
        },
        delete:function(req,res){
            var Departamento = app.get('departamento');
            Departamento.destroy({
               where: {
                   idDepartamento: req.body.idDepartamento
               } 
            }).then(function(departamento){
                res.json(departamentos);
            });
        },
        find:function(req,res){
           var Departamento = app.get('departamento');
            Departamento.find(req.body.id_departamento).then(function(departamento){
                if(departamento){
                    res.json(departamento);
                } else {
                    
                }
            })
        },
        superList(req,res){
            var Departamento = app.get('departamento');
            var LugarTuristico = app.get('lugarTuristico');
            Departamento.find({ where: {idDepartamento: req.paramas.id}, include: [LugarTuristico]}).then(function(departamento){
                res.json(departamento);
            })
        }
    }
}