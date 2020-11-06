var ws = require("ws")

module.exports.server=undefined;

module.exports.websocket = (path,handler)=>{
   var socket = new ws.Server({server:this.server,path});
   socket.on("connection",handler);
   return socket;
}