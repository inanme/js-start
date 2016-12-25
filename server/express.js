import express from 'express';
import path from 'path';
import http from 'http';
const app = express();
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));
app.use((req, res, next) => {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});

app.get("/", (request, response) => {
    response.end("Welcome to my homepage!");
});
app.get("/about", (request, response) => {
    response.end("Welcome to the about page!");
});
app.get(/^\/weather\/(\d+)-(\d+)$/, (request, response) => {
    response.end(`The current weather is NICE in (${request.params[0]}, ${request.params[1]})`);
});
app.get("/weather/:city", (request, response) => {
    response.status(404).json({message: `The current weather is NICE in ${request.params.city.toUpperCase()}`});
});
app.use((request, response) => {
    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(3000);