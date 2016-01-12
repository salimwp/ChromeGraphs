document.addEventListener('DOMContentLoaded', function(){
  initServerConnection();
});

function onReceive(info){
  console.log(ab2str(info.data));
  gauge.set(Number(ab2str(info.data)));
}

// Taken from Programming Chrome Apps chapter 4
function ab2str(buf){
  var dataView = new DataView(buf);
  var decoder = new TextDecoder('utf-8');
  return decoder.decode(dataView);
}


// Taken from http://stackoverflow.com/a/29576879
function stringToArrayBuffer(string){
  var arrayBuffer = new ArrayBuffer(string.length * 2);
  var buffer = new Uint16Array(arrayBuffer);
  for(var i = 0; i < string.length; i++){
    buffer[i] = string.charCodeAt(i);
  }

  return arrayBuffer;
}

function initServerConnection(){
  chrome.sockets.tcp.create({}, function(socketInfo){
    var socketId = socketInfo.socketId;	

    chrome.sockets.tcp.connect(socketId, "127.0.0.1", 8088, function(connectInfo){
      chrome.sockets.tcp.onReceive.addListener(onReceive);

    });

  });
}

