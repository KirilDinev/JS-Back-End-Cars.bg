const express = require('express');
const hbs = require('express-handlebars');

const carService = require('./services/cars.js')

const { about } = require('./controllers/about.js');
const create = require('./controllers/create.js');
const { details } = require('./controllers/details.js');
const { home } = require('./controllers/home.js');
const { notFound } = require('./controllers/notFound.js');
const deleteCar = require('./controllers/delete.js');
const edit = require('./controllers/edit.js');

const app = express();

app.engine('hbs', hbs.create({
    extname: 'hbs',
}).engine);
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carService());

app.get('/', home);
app.get('/about', about);
app.get('/details/:id', details);

app.route('/create').get(create.get).post(create.post);
app.route('/delete/:id').get(deleteCar.get).post(deleteCar.post);
app.route('/edit/:id').get(edit.get).post(edit.post)

app.all('*', notFound)

app.listen(3000, () => {
    console.log("Server strated on port 3000");
})