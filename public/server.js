const fs = require('fs');
const http = require('http');
const port = 1337;
const path = require('path');

function serveStaticFile(filePath, res, contentType, statusCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
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
            serveStaticFile(path.join(__dirname, 'public', 'index.html'), res, 'text/html');
            break;
        case '/about':
            serveStaticFile(path.join(__dirname, 'public', 'about.html'), res, 'text/html');
            break;
        case '/gallery':
            serveStaticFile(path.join(__dirname, 'public', 'gallery.html'), res, 'text/html');
            break;
        case '/pricing':
            serveStaticFile(path.join(__dirname, 'public', 'pricing.html'), res, 'text/html');
            break;    
        case '/styles.css':
            serveStaticFile(path.join(__dirname, 'public', 'css', 'stylesheet.css'), res, 'text/css');
            break;
        case '/logo.webp':
            serveStaticFile(path.join(__dirname, 'public', 'images', 'image1.webp'), res, 'image/webp');
            break;
        case '/image2.jpg':
            serveStaticFile(path.join(__dirname, 'public', 'images', 'image2.jpg'), res, 'image/jpeg');
            break;
        case '/image3.jpg':
            serveStaticFile(path.join(__dirname, 'public', 'images', 'image3.jpg'), res, 'image/jpeg');
            break;
        case '/image4.jpg':
            serveStaticFile(path.join(__dirname, 'public', 'images', 'image4.jpg'), res, 'image/jpeg');
            break;
        case '/script.js':
            serveStaticFile(path.join(__dirname, 'public', 'js', 'script.js'), res, 'text/javascript');
            break;
        case '/galleryscript.js':
            serveStaticFile(path.join(__dirname, 'public', 'js', 'galleryscript.js'), res, 'text/javascript');
            break;
        case '/pricingscript.js':
            serveStaticFile(path.join(__dirname, 'public', 'js', 'pricingscript.js'), res, 'text/javascript');
            break;
        case '/newpricingscript.js':
            serveStaticFile(path.join(__dirname, 'public', 'js', 'newpricingscript.js'), res, 'text/javascript');
            break;
        case '/jquery_ajax_loader.js':
            serveStaticFile(path.join(__dirname, 'public', 'js', 'jquery_ajax_loader.js'), res, 'text/javascript');
            break;
        case '/jquery-3.7.1.min.js':
            serveStaticFile(path.join(__dirname, 'public', 'js', 'jquery-3.7.1.min.js'), res, 'text/javascript');
            break;   
            default:
                serveStaticFile(path.join(__dirname, 'public', '404.html'), res, 'text/html', 404);
                break;
    }
            
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
