var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


router.get('/', function(req, res) {
  res.json({message: 'privet'});
});

app.use('/api', router);

app.listen(port);
console.log('magic' + port);
