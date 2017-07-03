var db=require('../dbconnection'); //reference of dbconnection.js

var Usuario=
{
  getAllUsuarios:function(callback)
  {
    return db.query("select * from usuarios",callback);
  },

  getUsuarioByAlias:function(Alias,callback)
  {
    return db.query("select * from usuarios where alias=?",[Alias],callback);
  },

  addUsuario:function(Usuario,callback)
  {
    var sentencia = db.query("Insert into usuarios values(?,?,?,?)",[Usuario.alias, Usuario.nombre, Usuario.apellidos, Usuario.contrasena],callback);

    var organizaciones = Usuario.organizaciones;

    for(var i in organizaciones)
    {
         //var id_organizacion = organizaciones[i].id;
         //var sentencia = db.query("Insert into usuarios_organizaciones values(?,?)",[Usuario.alias, id_organizacion],callback);
         console.log(organizaciones[i].id);
    }

    return sentencia;
  },

  deleteUsuario:function(alias,callback)
  {
    return db.query("delete from usuarios where alias=?",[alias],callback);
  },

  getLoginUsuario:function(Usuario,callback)
  {
    return db.query("select * from usuarios where alias=? and contrasena=?",[Usuario.alias, Usuario.contrasena],callback);
  },

  addUsuarioAOrganizacion:function(Usuario,callback)
  {
    db.query("Insert into usuarios_organizaciones values(?,?)",[Usuario.alias, Usuario.id_organizacion],callback);
  }

};

module.exports=Usuario;
