let mongoose = require('mongoose');
let User = mongoose.model('User');


module.exports = {
  new: function(req, res){
    return res.render('users/new.ejs');
  },

  create: function(req, res){
    console.log(req.body);
    User.create(req.body, function(err, user){
      if(err){
        console.log(err);
      }
      else{
        console.log('user saved sucessfully...')
        console.log(user);
        return res.redirect('/')
      }
    });
  },
  authenticate: function(req,res){
    //look up the email
    User.findOne({email: req.body.email}, function(err,user){
      if(err){
        console.log('that aint gonna work');
      }
      if(user && user.authenticate(req.body.password)){
        console.log('found a user named');
      }
      else{
        console.log('uh oh, that aint workin')
      }
      return res.redirect('/');
    })
  }

}
