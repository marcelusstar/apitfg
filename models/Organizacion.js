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
    return db.query("select * from usuarios_organizaciones where organizaciones_id=?",[Id],callback);
  },

  addOrganizacion:function(Organizacion,callback)
  {
    return db.query("Insert into organizaciones values(?, ?)",[Organizacion.id, Organizacion.nombre],callback);
  },

  deleteOrganizacion:function(id,callback)
  {
    return db.query("delete from organizaciones where id=?",[id],callback);
  }
};

module.exports=Organizacion;
