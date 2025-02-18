//program 1
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         if (req.url === '/hello') {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/plain');
//             res.end('Hello, World!');
//         } else {
//             res.statusCode = 404; 
//             res.setHeader('Content-Type', 'text/plain');
//             res.end('Not Found');
//         }
//     } else {
//         res.statusCode = 500; 
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Internal Server Error');
//     }
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



//program 2
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     switch (req.url) {
//         case '/home':
//             res.statusCode = 200;
//             res.end('Welcome to Home');
//             break;
//         case '/about':
//             res.statusCode = 200; 
//             res.end('About Us');
//             break;
//         case '/contact':
//             res.statusCode = 200; 
//             res.end('Contact Us');
//             break;
//         default:
//             res.statusCode = 404; 
//             res.end('Page Not Found');
//             break;
//     }
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// program 3
// const http = require('http');
// const url = require('url');
// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     const queryParams = parsedUrl.query;
//     if (parsedUrl.pathname === '/greet' && queryParams.name) {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(`Hello, ${queryParams.name}!`);
//     } else {
//         res.statusCode = 400; 
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Please provide a "name" query parameter.');
//     }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


//program 4
const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    if (req.url === '/file.html' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'file.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data); 
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
