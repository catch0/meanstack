// require express
var express = require("express");
// create the express app
var path = require("path");
var session = require('express-session');

var app = express();
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    if(!('count' in req.session)){
      req.session.count = 0;
    }
    req.session.count++;
    console.log('session: ' , req.session.count);
    res.render("index", {'count': req.session.count});
})
app.post('/count', function(req, res){
  req.session.count +=  1;
  res.redirect('/')
})

app.post('/reset', function(req,res){
  req.session.count=0;
  res.redirect('/');
})

// tell the express app to listen on port 6789
app.listen(6789, function() {
 console.log("listening on port 6789");
});
