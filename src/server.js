app.use(express.static('./dist/<"phonebook-app">'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'}
  );
  });
  app.listen(process.env.PORT || 8080);
  const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<phonebook-app>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<phonebook-app>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);