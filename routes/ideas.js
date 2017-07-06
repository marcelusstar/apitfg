var express = require('express');
var router = express.Router();
var Idea =require('../models/Idea');

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
