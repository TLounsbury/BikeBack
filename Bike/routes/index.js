var express = require('express');
var router = express.Router();
var bikes = require('../modules/bikes');
var taxes = require('../modules/taxes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bikes/team', (request, response, next) => {
  const result = {
    "team": 'BikeBois',
    "membersNames":[
      'Jason McGowan',
      'Parker Dunbar',
      'Trevor Lounsbury'
    ]
  };

  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(result));
})

router.get('/bikes/all/:city', (request, response, next) => {
  const city = request.params.city.toLowerCase();
  var taxRate;

  taxRate = taxes.find_tax(city);
  if(taxRate === -1){
    console.log("invalid city");
    response.sendStatus(400);
  }

  const result = bikes.calculate_prices(taxRate);
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(result));
});


module.exports = router;
