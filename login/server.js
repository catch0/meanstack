let express = require('express');
let bp = require('body-parser');
let app = express();
app.use(express.static(__dirname + '/client/static'))
app.use(bp.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views' );

require('./server/config/mongoose')
require('./server/config/routes')(app)
require('./server/config/mongoose');

app.listen(6789, function(){
  console.log('listenin on port 6789')
})
