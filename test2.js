"use strict"

if (window.WebSocket) {
    console.log("This browser supports WebSocket");
    var ws = new WebSocket("wss://makani.manoa.hawaii.edu"); 
} else {
    console.log("This browser doesn't support WebSocket");
}