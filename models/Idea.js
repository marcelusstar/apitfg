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

  addIdea:function(Idea, callback)
  {
    return db.query("Insert into ideas (descripcion, votos, nivel, Idea_id_madre, Proyecto_id, Usuario_alias_autor) values(?, ?, ?, ?, ?, ?)",
              [Idea.descripcion, 0, Idea.nivel, Idea.Idea_id_madre, Idea.Proyecto_id, Idea.Usuario_alias_autor],callback);
  },

  deleteIdea:function(id, callback)
  {
    return db.query("delete from ideas where id = ?", [id], callback);
  }

};

module.exports = Idea;
