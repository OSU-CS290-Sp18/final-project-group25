var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var itemData = require('./itemData');


var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword= process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" +mongoDBName;

var mongoDB = null;



var app = express();
var port = process.env.PORT || 3005;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
  var itemDataMongo = mongoDB.collection('items');
  res.status(200).render('featurePage', {
    items: itemData
  });
});

app.get('/featured/:item', function (req, res, next) {
  var item = Number(req.params.item);
                            //insert number of items
  if(true){
    var firstItem = itemData["watermelon"];
    var reviews = firstItem["reviews"];
    var photos = firstItem["photos"];
    var name = firstItem["name"];
    res.status(200).render('itemPage', {
      name: name,
      photos: photos,
      reviews: reviews
    });
  }
  else{
    next();
  }
});

app.get('*', function (req, res){
  res.status(404).render('404');
});



MongoClient.connect(mongoURL, function(err, client) {
  if(err){
    throw err;
  }

  mongoDB = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });

})
