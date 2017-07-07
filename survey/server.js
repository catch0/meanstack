var express = require("express");
var bp = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/static'))

app.use(bp.urlencoded({extended: true}))
app.use(session({
  secret: 'ceilingcat',
  // name: cookie_name,
  // store: sessionStore,
  // proxy: true,
  resave: true,
  saveUninitialized: true
}))

app.set('view-engine', 'ejs');

var users = [ ];

app.get('/', function(request, response){
  response.render('index.ejs', {"users": users, "name": request.session.name, })
})

app.post('/users', function(request,response){
  users.push(request.body);
  request.session.name = request.body.name;
  request.session.location= request.body.location;
  response.render('users.ejs',{"users": users, "name": request.session.name,})
})

app.get('*', function(request, response){
	response.send('404 - Awwwwwwww- file not found ')
})

app.listen(6789, function(){
  console.log("listening on Port 6789");
})
