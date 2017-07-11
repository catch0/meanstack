var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();

// connecting to database
mongoose.connect('mongodb://localhost/cat');

mongoose.connection.on('error', function(err){});


var CatSchema = new mongoose.Schema({
 name: String,
 age: Number,
 sex: String,
 cuddles: Boolean,
 favorite_food: String,
})

// Validations
CatSchema.path('name').required(true, 'Name cannot be blank');
CatSchema.path('age').required(true,'We need cats age');
CatSchema.path('cuddles').required(true, "We need to know if cat cuddles")
CatSchema.path('favorite_food').required(true, 'Cat must have a favorite food');

var Cat = mongoose.model('Cat', CatSchema);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//we're going to have /routes/index.js handle all of our routing

app.get('/', function(request, response){
  Cat.find({}, function(err, cat){
    if(err){
      response.render('error')
    } else {
      response.render('index', { 'cat': cat })
    }
  })
})

app.get('/cat/:id', function(req, res){
	Cat.find({ _id: req.params.id }, function(err, cat){
		if (err){
			console.log(err);
		} else {
			res.render('cat',{'cat': cat[0]});
		}
	});
});

app.get('/cat/edit/:id', function(req,res){
  Cat.find({_id: req.params.id}, function(err,cat){
    if(err){
      console.log(err);
    }
    else{
      res.render('catedit',{'cat': cat[0]});
    }
  })
})

app.post('/cats/:id', function(req,res){
  Cat.update({_id: req.params.id}, req.body, function(err,cat){
    if(err){
      console.log(err)
    }
    else{
      res.redirect('/')
    }
  })
})
app.post('/cats', function(req,res){
  var cat= new Cat(req.body);
    cat.save(function(err){
        if(err){
         res.render('new', {title: 'you have errors', errors: cat.errors})
       }
       else{
         res.redirect('/');
       }
     })
})

app.get('/new', function(req,res){
  res.render('new')
})

// app.get('/logout', function(req, res{
//   res.render('index.ejs')
// })

app.get('/cat/:id/destroy',function(req,res){
  Cat.remove({_id: req.params.id}, function(err,animal){
    console.log("Animal Deleted");
    res.redirect('/')
  })
})

// Setting our Server to Listen on Port: 6789
app.listen(6789, function() {
    console.log("listening on port 6789");
})
