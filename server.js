var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('./app/models/note');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://Admin:LgwfAWz2@ds135798.mlab.com:35798/intrigi');

var port = process.env.PORT || 8080;

router.use(function(req, res, next) {
  console.log('xorowo!');
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'privet'});
});

router.route('/notes')
  .post(function(req, res){
    var note = new Note();
    note.title = req.body.title;

    note.save(function(err){
      if(err)
        res.send(err);
      
      res.json({message: 'Заметка добавлена!'});
    });
  })

  .get(function(req, res){
    Note.find(function(err, notes){
      if (err)
        res.send(err);

      res.json(notes);
    });
  });



app.use('/api', router);

app.listen(port);
console.log('magic' + port);
