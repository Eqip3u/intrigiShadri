var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('./app/models/note');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://Admin:LgwfAWz2@ds135798.mlab.com:35798/intrigi');

var port = process.env.PORT || 8080;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


router.use(function(req, res, next) {
  console.log('Обращение к серверу');
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'api для Интриг Шадры'});
});

router.route('/notes')
  .post(function(req, res){
    var note = new Note();
    note.title = req.body.title;
    note.text = req.body.text;
    note.img = req.body.img;

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
    note.text = req.body.text;
    note.img = req.body.img;

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
    }, function(err){
        if(err)
          res.send(err);
        
        res.json({message: 'Заметка удалена!'});
      });
  });

app.use('/api', router);

app.listen(port, function onAppListening(err) {
  if(err){
    console.log(err);
  } else {
    console.log(`==> Listening at port: ${port}`)
  }
});
