const { Socket } = require('net');
const conf = require('./config');


//Create the socket client.
const client = new Socket();

function tick(){
  setTimeout(()=>{
    client.write(`tick::${conf.roomId}`);
  }, 3000)
}

//Connect to the server on the configured port 
client.connect(conf.port, conf.host, function(){
	//Log when the connection is established
  console.log(`Client: Connected to server ${conf.host}:${conf.port}`);
  tick();  
});

//Handle data coming from the server
client.on('data', function(data){
  if(data.toString() == 'OK'){
    tick();
  }
});

// Handle connection close 
client.on('close', function(){
   console.log('Cleint :Connection Closed');
});

//Handle error
client.on('error', function(error){
   console.error(`Connection Error ${error}`); 
});