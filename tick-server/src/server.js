const net = require('net');
const conf = require('./config');
const { createClient } = require('redis');

//Create an instance of the server and attach the client handling callback
const server = net.createServer(onClientConnection);
const redisClient = createClient({url: conf.redisUrl});

//Start listening on given port and host.
server.listen(conf.port, async function(){
  await redisClient.connect();
  console.log(`Server started on port ${conf.port}`); 
});


//the client handling callback
function onClientConnection(sock){
  //Log when a client connnects.
  console.log(`${sock.remoteAddress}:${sock.remotePort} Connected`);
    
	//Handle the client data.
  sock.on('data', async function(data){    
    const [cmd, roomId] = data.toString().split('::')
    if(cmd == 'tick'){
      const value = await redisClient.incr(`room_${roomId}`);
      console.log(`tick from ${sock.remoteAddress}, id=${roomId}, value=${value}`);      
      sock.write('OK');    
    }else{
      sock.end()
    }
  });
    
	//Handle when client connection is closed
  sock.on('close',function(){
    console.log(`${sock.remoteAddress}:${sock.remotePort} Connection closed`);
  });
    
	//Handle Client connection error.
  sock.on('error',function(error){
    console.error(`${sock.remoteAddress}:${sock.remotePort} Connection Error ${error}`);
  });
};

redisClient.on('error', (err) => console.log('Redis Client Error', err));