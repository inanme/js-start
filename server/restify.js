var restify = require('restify');

var server = restify.createServer();
server.get('/hello/:name', function (req, res, next) {
    return next(new restify.InvalidVersionError("I just don't like you"));
});
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});