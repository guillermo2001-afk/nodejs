const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 1337;

// View engine setup
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Public directory setup
const publicDirectory = path.join(__dirname, 'public');
app.use(express.static(publicDirectory));

app.use('/css', express.static(path.join(publicDirectory, 'css')));
app.use('/images', express.static(path.join(publicDirectory, 'images')));
app.use('/js', express.static(path.join(publicDirectory, 'js')));

// Routes
app.get('/', () => {
    // Replace with your data and rendering logic for the index page
    res.render('index');
});

app.get('/about', () => {
    // Replace with your data and rendering logic for the about page
    res.render('about');
});

// Additional routes based on handlebar files
app.get('/gallery', () => {
    // Replace with your data and rendering logic for the gallery page
    res.render('gallery');
});

app.get('/pricing', () => {
    // Replace with your data and rendering logic for the pricing page
    res.render('pricing');
});

app.get('/additional_content', () => {
    // Replace with your data and rendering logic for the additional_content page
    res.render('additional_content');
});

// Catch-all handler for 404 errors
app.get('*', () => {
    res.status(404).render('404');
});

// Error handler for 500 errors
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).render('500');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
