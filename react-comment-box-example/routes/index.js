var express = require('express');
var router = express.Router();
var fs = require('fs');
var Remarkable = require('remarkable');
var md = new Remarkable();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('db/comments.json', function(err,data){
    var comments = JSON.parse(data);
    // comments = comments.map(function(comment, index, array){
    //   return {author: comment.id, text: comment.id};
    // });
    res.render('index', { title: 'comment Box Example', comments:comments });
  });
});

router.post('/', function(req, res){
  fs.readFile('db/comments.json', function(err, data){
    var comments = JSON.parse(data);
    req.body.id = Date.now();
    comments.push(req.body);
    fs.writeFile('db/comments.json', JSON.stringify(comments,null,4), function(err){
      coments = comments.map(function(comment, index, array){
        return {author: comment.author, text: md.render(comment.text)};
    });
    res.render('index',{title:'comment box example', comments:comments});
    });
  });
});

module.exports = router;
