var express = require("express");
var app = express();

app.get ('/', function(request, response){
  response.send("<h1> Hello Wisconsin</h1>");
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(6789, function(){
  console.log("Everyday I'm hustlin' and your app is on port 6789")
})
app.use(express.static(__dirname + "/static"));
app.set('veiws', __dirname + '/views');
app.set('view engine', 'ejs');
