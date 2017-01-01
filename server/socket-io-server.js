var express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path =  require('path');

const publicPath = path.resolve(__dirname, "../node_modules");
app.use(express.static(publicPath));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/socket-io.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        //io.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});