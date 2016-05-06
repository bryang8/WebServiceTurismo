module.exports = function(app){
    return{
        list:function(req,res){
            var Rol = app.get('rol');
            Rol.findAll().then(function(roles){
               res.json(roles); 
            });
        },
        rolUsuarios:function(req,res){
            var Rol = app.get('rol');
            var Usuario = app.get('usuario');
            Rol.find({ where: {idRol: req.params.id}, include: [Usuario]}).then(function(rol){
                res.json(rol);
            })
        }
    }
}