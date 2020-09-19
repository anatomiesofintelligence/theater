var port =  3000;

var io = require('socket.io').listen(port);
console.log("Listening on *:"+port);


io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit("gesture", "A User Connected");
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit("gesture", "A user disconnected");
  });

  socket.on('gesture', (msg)=> {
	console.log("gesture: " + msg);
	io.emit("gesture", msg);
  });

  socket.on('update', (msg)=> {
	console.log("update: " + msg);
  });
});
