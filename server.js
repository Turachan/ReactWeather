var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  console.log(req.headers['x-forward-proto'] === 'http');
  console.log(req.h + "\n\n" + req.url);
  if (req.headers['x-forward-proto'] === 'http') {
    next();
  }
  else if (req.headers['x-forward-proto'] === 'https') {
    res.redirect('http://' + req.hostname +  req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port '+ PORT);
});
