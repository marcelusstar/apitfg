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
    return db.query("Insert into usuarios values(?,?,?,?)",[Usuario.alias, Usuario.nombre, Usuario.apellidos, Usuario.contrasena],callback);
  },

  deleteUsuario:function(alias,callback)
  {
    return db.query("delete from usuarios where alias=?",[alias],callback);
  },

  getLoginUsuario:function(Usuario,callback)
  {
    return db.query("select * from usuarios where alias=? and contrasena=?",[Usuario.alias, Usuario.contrasena],callback);
  },
};

module.exports=Usuario;
