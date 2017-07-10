var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();

// connecting to database
mongoose.connect('mongodb://localhost/quote');

mongoose.connection.on('error', function(err){});

// declare QoutesSchema
var QuoteSchema = new mongoose.Schema({
 name: String,
 content: String
})

// Validations
QuoteSchema.path('name').required(true, 'Name cannot be blank');
QuoteSchema.path('content').required(true, 'Content cannot be blank');

var Quote = mongoose.model('Quote', QuoteSchema);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//we're going to have /routes/index.js handle all of our routing

app.get('/', function(request, response){
  response.render('index.ejs')
})

app.post('/quotes', function(req,res){
  var quote = new Quote(req.body);
    quote.save(function(err){
        if(err){
         res.render('index', {title: 'you have errors', errors: quote.errors})
       }
       else{
         res.redirect('/quotes');
       }
     })
})

app.get('/quotes', function(request,response){
    Quote.find({}, function(err, quotes){
      if(err){
        response.render('error')
      } else {
        response.render('quotes', { 'quotes': quotes })
      }
    })
})

app.get('/logout', function(request, response){
  response.render('index.ejs')
})

// Setting our Server to Listen on Port: 6789
app.listen(6789, function() {
    console.log("listening on port 6789");
})
