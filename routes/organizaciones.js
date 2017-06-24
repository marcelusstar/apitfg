var express = require('express');
var router = express.Router();
var Organizacion =require('../models/Organizacion');

/* GET de todos los Organizaciones*/
router.get('/', function(req, res)
{
	Organizacion.getAllOrganizaciones(function(err,rows)
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
	Organizacion.getOrganizacionById(req.params.id,function(err,rows)
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

router.get('/:id/usuarios', function(req, res)
{
	Organizacion.getAllUsuariosById(req.params.id,function(err,rows)
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
	Organizacion.addOrganizacion(req.body,function(err,count)
	{
	  if(err)
	  {
	  	res.json(err);
	  }
	  else
		{
	  	res.json(req.body); //or return count for 1 &amp;amp;amp; 0
	  }
	});
 });

router.delete('/:id',function(req,res,next)
{
	Organizacion.deleteOrganizacion(req.params.id,function(err,count)
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
