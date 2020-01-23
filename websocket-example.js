// The Definitive Guide to HTML5 WebSocket
//  Example WebSocket server
// Chapter 3: Building a Simple WebSocket Server

// See The WebSocket Protocol for the official specification
// http://tools.ietf.org/html/rfc6455

var events = require("events");
var http = require("http");
var crypto = require("crypto");
var util = require("util");

// opcodes for WebSocket frames
// http://tools.ietf.org/html/rfc6455#section-5.2