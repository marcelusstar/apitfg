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

  addUsuarioAOrganizacion:function(Usuario,callback)
  {
    db.query("Insert into usuarios_organizaciones values(?,?)",[Usuario.alias, Usuario.id_organizacion],callback);
  },

  addUsuarioAProyecto:function(Usuario,callback)
  {
    db.query("Insert into proyecto_usuarios values(?,?)",[Usuario.Proyecto_id, Usuario.Usuario_alias],callback);
  }

};

module.exports=Usuario;
