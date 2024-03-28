const fs = require('fs');
const http = require('http');
const port = 1337;
const path = require('path');

function serveStaticFile(path, res) {
    let statusCode = 200;
    let contentType = 'text/html';

    fs.readFile(path, (err, data) => {
        if (err) {
            statusCode = 500;
            contentType = 'text/plain';
            data = 'Internal Server Error';
        }

        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    let url = req.url.toLowerCase().split('?')[0];
    url = url.endsWith('/') ? url.slice(0, -1) : url;

    switch (url) {
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/gallery':
            serveStaticFile(res, '/public/gallery.html', 'text/html');
            break;
        case '/pricing':
            serveStaticFile(res, '/public/pricing.html', 'text/html');
            break;    
        case '/styles.css':
            serveStaticFile(res, '/public/css/stylesheet.css', 'text/css');
            break;
        case '/logo.webp':
            serveStaticFile(res, '/public/images/image1.webp', 'image/webp');
            break;
        case '/image2.jpg':
            serveStaticFile(res, '/public/images/image2.jpg', 'image/jpeg');
            break;
        case '/image3.jpg':
            serveStaticFile(res, '/public/images/image3.jpg', 'image/jpeg');
            break;
        case '/image4.jpg':
            serveStaticFile(res, '/public/images/image4.jpg', 'image/jpeg');
            break;
        case '/script.js':
            serveStaticFile(res, '/public/js/script.js', 'text/javascript');
            break;
        case '/galleryscript.js':
            serveStaticFile(res, '/public/js/galleryscript.js', 'text/javascript');
            break;
        case '/pricingscript.js':
            serveStaticFile(res, '/public/js/pricingscript.js', 'text/javascript');
            break;
        case '/newpricingscript.js':
            serveStaticFile(res, '/public/js/newpricingscript.js', 'text/javascript');
            break;
        case '/jquery_ajax_loader.js':
            serveStaticFile(res, '/public/js/jquery_ajax_loader.js', 'text/javascript');
            break;
        case '/jquery-3.7.1.min.js':
            serveStaticFile(res, '/public/js/jquery-3.7.1.min.js', 'text/javascript');
            break;   
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});