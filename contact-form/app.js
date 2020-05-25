const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const contactRouter = require('./routes/contact');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/contact', contactRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: "Saesha Senger, PhD",
    });
});

app.listen(PORT, () => {
  console.log(`Listening. Open http://localhost:${PORT} to view.`);
});