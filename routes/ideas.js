var express = require('express');
var router = express.Router();
var Idea =require('../models/Idea');

// -----------------------------------------------------------------------------

router.get('/', function(req, res)
{
	Idea.getAllIdeas(function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/:id', function(req, res)
{
	Idea.getIdeaById(req.params.id,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/proyecto/:id_proyecto', function(req, res)
{
	Idea.getIdeasProyecto(req.params.id_proyecto,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/idea_madre/:id_idea_madre', function(req, res)
{
	Idea.getIdeasDeIdeaMadre(req.params.id_idea_madre,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/idea_origen/:id_idea_origen', function(req, res)
{
	Idea.getIdeasDeIdeaOrigen(req.params.id_idea_origen,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/proyecto/:id_idea_origen/base', function(req, res)
{
	Idea.getIdeasBase(req.params.id_idea_origen,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/maximo_nivel_idea_origen/:id_idea_origen', function(req, res)
{
	Idea.getMaxNivelArbol(req.params.id_idea_origen,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.get('/maximo_nivel_proyecto/:id_proyecto', function(req, res)
{
	Idea.getMaxNivelProyecto(req.params.id_proyecto,function(err,rows)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  })
});

// -----------------------------------------------------------------------------

router.post('/',function(req,res,next)
{
	Idea.addIdea(req.body,function(err,count)
	{
	  if(err)
	  {
	  	res.json(err);
	  }
	  else
		{
	  	res.json(req.body);//or return count for 1 &amp;amp;amp; 0
	  }
	});
 });

// -----------------------------------------------------------------------------

router.delete('/:id',function(req,res,next)
{
	Idea.deleteIdea(req.params.id,function(err,count)
	{
		if(err)
	  {
	  	res.json(err);
	  }
	  else
	  {
	  	res.json(count);
	  }
	});
});

module.exports = router;
