
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../client')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.listen(3001);
console.log('Listening on port 3001...');
