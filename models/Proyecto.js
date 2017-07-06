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
    return db.query("select * from proyectos where Usuario_alias_autor=?",[usuario_alias],callback);
  },

  addProyecto:function(Proyecto,callback)
  {
    return db.query("Insert into proyectos (nombre, descripcion, anonimato, fecha_inicio, fecha_fin, Usuario_alias_autor) values(?,?,?,?,?,?)",
              [Proyecto.nombre, Proyecto.descripcion, Proyecto.anonimato, Proyecto.fecha_inicio, Proyecto.fecha_fin, Proyecto.Usuario_alias_autor],callback);
  },

  deleteProyecto:function(Id,callback)
  {
    return db.query("delete from proyectos where id=?",[Id],callback);
  }
}

module.exports=Proyecto;
