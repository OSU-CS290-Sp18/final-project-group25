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
  res.status(200).render('itemPage', {
    items: itemData
  });
});

app.get('/featured/:item', function (req, res, next) {
  var item = Number(req.params.item);
                            //insert number of items
  if(itemData[item] && (item >= 0 && item <= numItems)){
    res.status(200).render('itemPage', {
      items: [itemData[item]]
    });
  }
  else{
    next();
  }
});

app.get('*', function (req, res){
  res.status(404).render('404')
});


app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (peopleData[person]) {
    res.status(200).render('photoPage', peopleData[person]);
  } else {
    next();
  }
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
})
