/**
 *  Index
 *  =====
 *
 */

var querystring     = require('querystring'),
    WebSocketServer = require('websocket').server,
    localServer     = require('./lib/localserver.js'),
    config          = require('./config.js');



var CONNECTIONS = {};

var server = localServer.init( config.dir, config.port );

var socketServer = new WebSocketServer({

  httpServer            : server,
  autoAcceptConnections : false
});


socketServer.on('request', function ( req ) {

  var conn = req.accept( null, req.origin ),

      time = Date.now();

  conn.send( JSON.stringify({ id: time, action: 'REGISTER', data: time }) );

  CONNECTIONS[ time ] = conn;

  conn.on('error', function(){ console.log('[ERROR]'); });
  conn.on('close', function(){ console.log('[CLOSE]'); });
  conn.on('message', handle );
});

function handle ( msg ) {

  msg = JSON.parse(msg); // id, action, data

  console.log(msg);
}

// INIT
// MOVE
// COLOR


var getKeys = Object.keys;

function sendAll ( action, data ) {

  var msg  = JSON.stringify({ action: action, data: data }),

      keys = getKeys(CONNECTIONS);

  for ( var i = 0, l = keys.length; i < l; i++ ) {

    CONNECTIONS[ keys[i] ].send( msg );
  }
}
