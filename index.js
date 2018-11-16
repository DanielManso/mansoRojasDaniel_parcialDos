const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const download = require('download');

const app = express();

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    response.render('home');
});

app.get('/api/descargar', function(request, response){
    //EL NOMBRE DE LA VARIABLE DEBE SER IGUAL TANTO 
    //          ACÁ COMO EN EL INPUT DEL HTML
    var image__name = request.query.image__name;
    var image__url = request.query.image__url;

    if(image__name !== null && image__url !== null){
        download(image__url.valueOf()).then(data =>{
            fs.writeFileSync('imagenes/'+image__name+'.jpg', data);
        });
    
       // response.send(image__name+' Descargado');
        response.render('home');
    } else {
        response.send('MUCHO BOBO HIJUEPUTA');
    }

});

app.listen(5500);