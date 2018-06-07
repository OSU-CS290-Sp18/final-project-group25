var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var itemData = require('./itemData');

var app = express();
var port = process.env.PORT || 3005;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
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


app.listen(port, function () {
  console.log("== Server listening on port", port);
})
