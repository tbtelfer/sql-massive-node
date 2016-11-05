var massive = require('massive');
var connectionString = "postgres://postgres:newday@localhost/sandbox";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// Use our connection string to get a copy/instance of massive to use.
// Then add it to our app as a variable called db.
var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db',massiveInstance);

var controller = require('./productsCtrl.js'); //Sets the controller file

app.get('/api/products/', controller.GetAll);  // Directs to GetAll function in controller

app.get('/api/product/:id', controller.GetOne);  // Directs to GetOne function in controller

app.put('/api/product/:id', controller.Update);  // Directs to Update function in controller

app.post('/api/products/', controller.Create);  // Directs to Create (new record) function in controller

app.delete('/api/product/:id', controller.Delete);  // Directs to Deletefunction in controller


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
