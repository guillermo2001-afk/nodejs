const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1337;
const publicPath = 'C:\\Users\\guill\\Documents\\web_projects372\\myNodeWebsite\\public';

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    const file = path.join(publicPath, filePath);

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
            serveStaticFile(res, '/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/about.html', 'text/html');
            break;
        case '/gallery':
            serveStaticFile(res, '/gallery.html', 'text/html');
            break;
        case '/pricing':
            serveStaticFile(res, '/pricing.html', 'text/html');
            break;    
        case '/stylesheet.css':
            serveStaticFile(res, '/css/stylesheet.css', 'text/css');
            break;
        case '/image1.webp':
            serveStaticFile(res, '/images/image1.webp', 'image/webp');
            break;
        case '/image2.jpg':
            serveStaticFile(res, '/images/image2.jpg', 'image/jpeg');
            break;
        case '/image3.jpg':
            serveStaticFile(res, '/images/image3.jpg', 'image/jpeg');
            break;
        case '/image4.jpg':
            serveStaticFile(res, '/images/image4.jpg', 'image/jpeg');
            break;
        case '/script.js':
            serveStaticFile(res, '/js/script.js', 'text/javascript');
            break;
        case '/galleryscript.js':
            serveStaticFile(res, '/js/galleryscript.js', 'text/javascript');
            break;
        case '/pricingscript.js':
            serveStaticFile(res, '/js/pricingscript.js', 'text/javascript');
            break;
        case '/newpricingscript.js':
            serveStaticFile(res, '/js/newpricingscript.js', 'text/javascript');
            break;
        case '/jquery_ajax_loader.js':
            serveStaticFile(res, '/js/jquery_ajax_loader.js', 'text/javascript');
            break;
        case '/jquery-3.7.1.min.js':
            serveStaticFile(res, '/js/jquery-3.7.1.min.js', 'text/javascript');
            break;   
        default:
            serveStaticFile(res, '/404.html', 'text/html', 404);
            break;
    }
    
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
