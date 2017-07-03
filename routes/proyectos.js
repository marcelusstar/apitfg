var express = require('express');
var router = express.Router();
var Proyecto =require('../models/Proyecto');

/* GET de todos los proyectos*/
router.get('/', function(req, res)
{
	Proyecto.getAllProyectos(function(err,rows)
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

router.get('/:id', function(req, res)
{
	Proyecto.getProyectoById(req.params.id,function(err,rows)
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

router.get('/usuario/:alias', function(req, res)
{
	Proyecto.getAllProyectosUsuario(req.params.alias,function(err,rows)
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

router.post('/',function(req,res,next)
{
	Proyecto.addProyecto(req.body,function(err,count)
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

router.delete('/:id',function(req,res,next)
{
	Proyecto.deleteProyecto(req.params.id,function(err,count)
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

module.exports=router;
