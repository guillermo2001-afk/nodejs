const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1337;

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    const file = path.join(__dirname, filePath);

    fs.readFile(file, (err, data) => {
        if (err) {
            console.error(`Error reading file ${file}:`, err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
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
        case '/css/stylesheet.css':
            serveStaticFile(res, '/public/css/stylesheet.css', 'text/css');
            break;
        case '/images/image1.webp':
            serveStaticFile(res, '/public/images/image1.webp', 'image/webp');
            break;
        case '/images/image2.jpg':
            serveStaticFile(res, '/public/images/image2.jpg', 'image/jpeg');
            break;
        case '/images/image3.jpg':
            serveStaticFile(res, '/public/images/image3.jpg', 'image/jpeg');
            break;
        case '/images/image4.jpg':
            serveStaticFile(res, '/public/images/image4.jpg', 'image/jpeg');
            break;
        case '/images/Logo.png':
            serveStaticFile(res, '/public/images/Logo.png', 'image/png');
            break;
        case '/js/script.js':
            serveStaticFile(res, '/public/js/script.js', 'text/javascript');
            break;
        case '/js/galleryscript.js':
            serveStaticFile(res, '/public/js/galleryscript.js', 'text/javascript');
            break;
        case '/js/pricingscript.js':
            serveStaticFile(res, '/public/js/pricingscript.js', 'text/javascript');
            break;
        case '/newpricingscript.js':
            serveStaticFile(res, '/public/js/newpricingscript.js', 'text/javascript');
            break;
        case '/js/jquery_ajax_loader.js':
            serveStaticFile(res, '/public/js/jquery_ajax_loader.js', 'text/javascript');
            break;
        case '/js/jquery-3.7.1.min.js':
            serveStaticFile(res, '/public/js/jquery-3.7.1.min.js', 'text/javascript');
            break;   
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
    }
    
);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
