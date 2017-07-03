var express = require('express');
var router = express.Router();
var Usuario =require('../models/Usuario');

/* GET de todos los usuarios*/
router.get('/', function(req, res)
{
	Usuario.getAllUsuarios(function(err,rows)
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

router.get('/:alias', function(req, res)
{
	Usuario.getUsuarioByAlias(req.params.alias,function(err,rows)
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
	Usuario.addUsuario(req.body,function(err,count)
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

router.delete('/:alias',function(req,res,next)
{
	Usuario.deleteUsuario(req.params.alias,function(err,count)
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

router.post('/login',function(req,res,next)
{
	Usuario.getLoginUsuario(req.body,function(err,count)
	{
		var logueado;

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

router.post('/organizacion',function(req,res,next)
{
	Usuario.addUsuarioAOrganizacion(req.body,function(err,count)
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
