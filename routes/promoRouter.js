const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {            //for all requests whether it its is get, put post or delete
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
 })
 
 .get((req,res,next)=> {
     res.end('Will send all the promotions to you! ');
 })
 
 .post((req,res,next)=>{             //data is stored in body og req message, hence body-parser
    res.end('Will add the promotion: '+ req.body.name + ' with details: '+ req.body.description);
 })
 
 .put((req,res,next)=>{            
     res.statusCode=403;                    //403 means operation not supported
     res.end('PUT operation not supprted on promotions');
  })
 
  .delete((req,res,next)=>{            
     res.end('Deleting all the promotions');
  });

  promoRouter.route('/:promoId')
 .get((req,res,next)=> {
    res.end('Will send the detalis of the promotion: '+ req.params.promoId + 'to you!');
})

.post((req,res,next)=>{             
    res.statusCode=403;                    //403 means operation not supported
    res.end('POST operation not supprted on /promotions/' + req.params.promoId);
})

.put((req,res,next)=>{            
    res.write('Updating the promotion: '+req.params.promoId+'\n');
    res.end('\nWill update the promotion: '+ req.body.name +'with details: '+req.body.description);
 })

 .delete((req,res,next)=>{            
    res.end('Deleting promotion: ' + req.params.promoId);
 });



  module.exports = promoRouter;