const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');


const app = express();

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    response.render('paginaA');
});
app.get('/!!', function(request, response){
    response.render('paginaA');
});

app.listen(5500);