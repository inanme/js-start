import  http from 'pure-http';
const requestHandler = (request, response) => {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
};
const server = http.createServer(requestHandler);
server.listen(3000);
