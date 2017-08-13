var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('db/comments.json', function(err, data){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.json(JSON.parse(data));
  });
});

router.post('/', function(req,res){
  fs.readFile('db/comments.json', function(err, data){
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('db/comments.json',JSON.stringify(comments, null, 4), function(err){
      res.setHeader('Access-Control-Allow-Origin','*');
      res.json(comments);
    });
  });
});

module.exports = router;
