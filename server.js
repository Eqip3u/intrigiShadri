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
  console.log('idet xorowo epta');
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'api для Интриг Шадры'});
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

router.route('/notes/:note_id')

  .get(function(req, res){
    Note.findById(req.params.note_id ,function(err, note){
      if (err)
        res.send(err);
      
      res.json(note);
    });
  })

  .put(function(req, res){
    Note.findById(req.params.note_id, function(err, note){
      if (err)
        res.send(err);

      note.title = req.body.title;

      note.save(function(err){
        if (err)
          res.send(err);

        res.json({message: 'Заметка обновлена!'});
      });
    });
  })

  .delete(function(req, res){
    Note.remove({
      _id: req.params.note_id
    }, function(err, note){
        if(err)
          res.send(err);
        
        res.json({message: 'Заметка удалена!'});
      });
  });

app.use('/api', router);

app.listen(port);
console.log('magic' + port);
