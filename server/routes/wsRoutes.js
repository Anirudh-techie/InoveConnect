var ws = require("../ws")
var chats = [];
var server = ws.websocket('/ws',(socket)=>{
   socket.send(JSON.stringify(chats));
   socket.on("message",(msg)=>{
      server.clients.forEach(
         client=>{
            chats.push({msg:msg});
            client.send(JSON.stringify({msg:msg}));
         }
      );
   })
})