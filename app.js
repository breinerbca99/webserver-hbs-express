const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//MIDLEWARE
app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'breiner',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'breiner',
    });
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});