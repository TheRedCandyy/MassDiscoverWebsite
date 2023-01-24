const path = require('path');
const express = require('express')
const hbs = require('hbs')
const app = express();
const port = 3000

const publicDirectory = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'public/views');
const partialsPath = path.join(__dirname, 'public/partials');

app.use(express.json());

app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
  res.render('helloWorld')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})