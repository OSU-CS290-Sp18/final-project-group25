var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword +
  "@" + mongoHost + ":" + mongoPort +  "/" + mongoDBName;

var mongoDB = null;

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

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res, next){
  next();
});

app.get('/featured', function(req, res){
  var itemCollection = mongoDB.collection('itemData');
  itemCollection.find({id: "featured"}).toArray(function(err, items){
    if(err){
      res.status(500).send("Error fetching item from DB.");
    } else if(items.length > 0){
      res.status(200).render('featurePage', items[0]);
    }
  });
});

app.get('/featured/:item', function (req, res, next) {
  var item = req.params.item.toLowerCase();
  var itemCollection = mongoDB.collection('itemData');
  itemCollection.find({name: item}).toArray(function (err, itemDocs){
    console.log(itemDocs);
    if(err){
      res.status(500).send("Error fetching item from DB.");
    } else if(itemDocs.length > 0){
      res.status(200).render('itemPage', itemDocs[0]);
    } else{
      next();
    }
  });
});
/*
app.post('/people/:item/addReview', function(req, res, next){
  var item = req.params.item.toLowerCase();
  if(itemData[item]){
    if(req.body && req.body.reviewContent && req.body.author){
      var review = {
        reviewContent = req.body.reviewContent,
        author = req.body.author
      };
      itemData[item].review.push(review);
      res.status(200).end();
    } else {
      res.status(400).send("Request needs a JSON body with caption and photoURL.")
    }
  } else{
    next();
  }
});
*/
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
