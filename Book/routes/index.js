var express = require('express');
var router = express.Router();
var books = require('../modules/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books/team', (request, response, next) => {
  const result = {
    "team": 'GeC',
    "membersNames":[
      'Chris Koh',
      'Gabe Freitas',
      'Evan Plevinsky'
    ]
  };

  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(result));
})

router.get('/books/all/:city', (request, response, next) => {
  const city = request.params.city.toLowerCase();
  var taxRate;
  console.log('City is ' + city);

  if(city === 'raleigh'){
    taxRate = 0.075;
  }
  else if(city === 'durham'){
    taxRate = 0.08;
  }
  else {
    //TODO deal with invalid city
  }

  const result = books.calculate_prices(taxRate);
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(result));
});


module.exports = router;
