var db=require('../dbconnection'); //reference of dbconnection.js

var Organizacion=
{
  getAllOrganizaciones:function(callback)
  {
    return db.query("select * from organizaciones",callback);
  },

  getOrganizacionById:function(Id,callback)
  {
    return db.query("select * from organizaciones where id=?",[Id],callback);
  },

  getAllUsuariosById:function(Id,callback)
  {
    return db.query("select * from usuarios_organizaciones where Organizacion_id=?",[Id],callback);
  },

  addOrganizacion:function(Nombre,callback)
  {
    return db.query("Insert into organizaciones (nombre) values(?, ?)",[Nombre],callback);
  },

  deleteOrganizacion:function(id,callback)
  {
    return db.query("delete from organizaciones where id=?",[id],callback);
  }
};

module.exports=Organizacion;
