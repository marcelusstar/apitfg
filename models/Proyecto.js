var db=require('../dbconnection'); //reference of dbconnection.js

var Proyecto =
{
  getAllProyectos:function(callback)
  {
    return db.query("select * from proyectos",callback);
  },

  getProyectoById:function(Id,callback)
  {
    return db.query("select * from proyectos where id=?",[Id],callback);
  },

  getAllProyectosUsuario:function(usuario_alias,callback)
  {
    return db.query("select * from proyectos where usuario_alias=?",[usuario_alias],callback);
  },

  addProyecto:function(Proyecto,callback)
  {
    return db.query("Insert into proyectos (nombre,descripcion,usuario_alias) values(?,?,?)",[Proyecto.nombre, Proyecto.descripcion, Proyecto.usuario_alias],callback);
  },

  deleteProyecto:function(Id,callback)
  {
    return db.query("delete from proyectos where id=?",[Id],callback);
  }
}

module.exports=Proyecto;
