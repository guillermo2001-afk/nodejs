const express = require('express');

const app = express();
const port = 1337;
const publicPath = __dirname+'/public';


app.use('/css', express.static(`${publicPath}/css`));
app.use('/images', express.static(`${publicPath}/images`));
app.use('/js', express.static(`${publicPath}/js`));

app.get('/index', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/gallery', (req, res) => {
    res.sendFile(`${publicPath}/gallery.html`);
});

app.get('/pricing', (req, res) => {
    res.sendFile(`${publicPath}/pricing.html`);
});

// Add wildcard route for 404 page
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});