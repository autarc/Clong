/**
 *  Index
 *  =====
 *
 */

var querystring     = require('querystring'),
    WebSocketServer = require('websocket').server,
    localServer     = require('./lib/localserver.js'),
    config          = require('./config.js');


var maxConnections = 4;

var CONNECTIONS = {};

var server = localServer.init( config.dir, config.port );

var socketServer = new WebSocketServer({

  httpServer            : server,
  autoAcceptConnections : false
});



var getKeys = Object.keys;

socketServer.on('request', function ( req ) {

  var entries = getKeys(CONNECTIONS),
      id      = entries.length;

  if ( id === maxConnections ) return;

  var conn = req.accept( null, req.origin );

  conn.send( JSON.stringify({ id: id, action: 'REGISTER', data: id }) );


  for ( var i = 0; i < id; i++ ) {

    conn.send( JSON.stringify({ action: 'REGISTER', data: i }) );
  }

  CONNECTIONS[ id ] = conn;

  conn.on('error', function(){ console.log('[ERROR]'); });
  conn.on('close', function(){ console.log('[CLOSE]'); }); // TODP: remove on leave

  conn.on('message', handle );

});


function handle ( msg ) {

  msg = JSON.parse(msg); // id, action, data

  console.log(msg);
}

function sendAll ( action, data ) {

  var msg  = JSON.stringify({ action: action, data: data }),

      keys = getKeys(CONNECTIONS);

  for ( var i = 0, l = keys.length; i < l; i++ ) {

    CONNECTIONS[ keys[i] ].send( msg );
  }
}
