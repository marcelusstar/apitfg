var db=require('../dbconnection'); //reference of dbconnection.js

var Idea =
{
  getAllIdeas:function(callback)
  {
    return db.query("select * from ideas", callback);
  },

  getIdeaById:function(id, callback)
  {
    return db.query("select * from ideas where id = ?", [id], callback);
  },

  getIdeasProyecto:function(id_proyecto, callback)
  {
    return db.query("select * from ideas where Proyecto_id = ?", [id_proyecto], callback);
  },

  getIdeasDeIdeaMadre:function(id_idea_madre, callback)
  {
    return db.query("select * from ideas where Idea_id_madre = ?", [id_idea_madre], callback);
  },

  getIdeasDeIdeaOrigen:function(id_idea_origen, callback)
  {
    console.log('bienfjf');
    return db.query("select * from ideas where Idea_id_origen = ?", [id_idea_origen], callback);
  },

  getIdeasBase:function(id_proyecto, callback)
  {
    console.log('baseee');
    return db.query("select * from ideas where Idea_id_madre is null and Idea_id_origen is null and Proyecto_id = ?", [id_proyecto], callback);
  },

  getMaxNivelArbol:function(id_idea_origen, callback)
  {
    return db.query("select max(nivel) from ideas where Idea_id_origen = ?", [id_idea_origen], callback);
  },

  getMaxNivelProyecto:function(id_proyecto, callback)
  {
    return db.query("select max(nivel) as max_nivel from ideas where Proyecto_id = ?", [id_proyecto], callback);
  },

  addIdea:function(Idea, callback)
  {
    return db.query("Insert into ideas (descripcion, votos, nivel, Idea_id_madre, Idea_id_origen, Proyecto_id, Usuario_alias_autor) values(?, ?, ?, ?, ?, ?, ?)",
              [Idea.descripcion, 0, Idea.nivel, Idea.Idea_id_madre, Idea.Idea_id_origen, Idea.Proyecto_id, Idea.Usuario_alias_autor],callback);
  },

  deleteIdea:function(id, callback)
  {
    return db.query("delete from ideas where id = ?", [id], callback);
  }

};

module.exports = Idea;
