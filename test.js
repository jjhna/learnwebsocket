"use strict";

var ws;
var output;

if (window.WebSocket) {
    console.log("This browser supports WebSocket");
    setup();
} else {
    console.log("This browser doesn't support WebSocket");
}

function setup() {   
    output = document.getElementById("output");   
    ws = new WebSocket("ws://localhost:9292"); 

    // Listen for the connection open event then call the sendMessage function   
    ws.onopen = function(e) {      
        console.log("Connected to websocket address: " + this.url); 
        console.log("The address is type: " + ws + " " + ws.binaryType);
        sendMessage("Hello SAGE2!");
        setUpListeners();
    }
        
    // Listen for the close connection event   
    ws.onclose = function(e) {      
        console.log("Disconnected: " + e.reason);   
    }
            
    // Listen for connection errors   
    ws.onerror = function(e) {      
        console.log("Error during connection " + e.reason);   
    }

    // Listen for new messages arriving at the client   
    ws.onmessage = function(e) {
        console.log("Message received: data type " + e + " = data: " + e.data);
    }
    
    ws.addEventListener("quickNote", function(e)
    {
        var returnedData = JSON.parse(e);
        console.log(returnedData);
    }, false);
}

// Send a message on the WebSocket.
function sendMessage(msg){   
    ws.send(msg);
    //ws.send('{"H": "publicmaphub", "M": "getData", "A":[], "I":1}');
    ws.send('{"f": "0010", "d": "null"}')
    console.log("Message sent: " + msg);   
}

function setUpListeners()
{
    ws.on('initialize', function(data) {
		var startTime  = new Date(data.start);
		ws.UID = data.UID;

		// Global initialization
		SAGE2_initialize(startTime);

		// Request list of assets
		ws.emit('requestStoredFiles');
	});
}