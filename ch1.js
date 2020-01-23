// "use strict";

// var wss = new WebSocket("ws://echo.websocket.org/updates");
// var THRESHOLD = 10240;

// //Websocket Events
// wss.onopen = function(e) {
//  console.log("Connection has been established");
// };

// ws.onmessage = function(e) {   
//     if(typeof e.data === "string"){      
//         console.log("String message received", e, e.data);   
//     } else {      
//         console.log("Other message received", e, e.data);   
//     }
// };

if (window.WebSocket) {
    console.log("This browser supports WebSocket");
    setup();
} else {
    console.log("This browser doesn't support WebSocket");
}

function setup() {   
    output = document.getElementById("output");   
    ws = new WebSocket("ws://echo.websocket.org/echo"); 

    // Listen for the connection open event then call the sendMessage function   
    ws.onopen = function(e) {      
        log("Connected");      
        sendMessage("Hello WebSocket!")   
    }
        
    // Listen for the close connection event   
    ws.onclose = function(e) {      
        log("Disconnected: " + e.reason);   
    }
            
    // Listen for connection errors   
    ws.onerror = function(e) {      
        log("Error ");   
    }

    // Listen for new messages arriving at the client   
    ws.onmessage = function(e) {      
        log("Message received: data type " + e + " = data: " + e.data);      
        // Close the socket once one message has arrived.      
        ws.close();   
    }
}
    
// Send a message on the WebSocket.
function sendMessage(msg){   
    ws.send(msg);      
    log("Message sent: " + msg);   
}

// Display logging information in the document.
function log(s) {   
    var p = document.createElement("p");   
    p.style.wordWrap = "break-word";
    p.textContent = s;   
    output.appendChild(p);   
    // Also log information on the javascript console   
    console.log(s);
}
