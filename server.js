var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  console.log(req);
  if (req.headers['x-forward-proto'] === 'https') {
    res.redirect('http://' + req.hostname +":"+PORT +  req.url);
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port '+ PORT);
});
