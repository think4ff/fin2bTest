var express = require('express');
var router = express.Router();
var client = require('cheerio-httpcli');

function fib(inNum) {
  if(inNum > 1){
    return fib(inNum-1) + fib(inNum-2)
  } else {
    return inNum;
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fin2b TEST',
    currDate: new Date()
  });
});

router.post('/login', function(req, res, next) {
  var id = req.body.uid;
  var pw = req.body.upw;
  res.send("Input id / password is [" + id +" / "+pw +"]");
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'Fin2b TEST',
    currDate: new Date()
  });
});

router.get('/searchForm', function(req, res, next) {
  res.render('search', { title: 'Fin2b TEST',
    currDate: new Date()
  });
});

router.get('/searchAction', function(req, res, next) {
  var word = req.query.sword;
  console.log("search word::" + word);
  res.redirect('https://www.google.co.kr/search?q=' + word);
});

router.get('/fibonacciForm', function(req, res, next) {
  res.render('fibonacciForm', { title: 'Fin2b TEST',
    currDate: new Date()
  });
});

router.post('/fibonacci', function(req, res, next) {
  var inNum = req.body.number;
  console.log("search word::" + inNum);
  var result = fib(inNum);
  console.log("result::" + result);
  res.send( {result: result} );
});


module.exports = router;
