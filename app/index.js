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
var COLORS = {};
var POSITIONS = {};



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

  for ( var i = 0; i < id; i++ ) {

    conn.send( JSON.stringify({ action: 'ADD', data: { id: i, color: COLORS[i], pos: POSITIONS[i] } }) );
  }

  conn.send( JSON.stringify({ action: 'REGISTER', data: id }) );

  CONNECTIONS[ id ] = conn;

  conn.on('error', function(){ console.log('[ERROR]'); });
  conn.on('close', function(){ console.log('[CLOSE]'); }); // TODP: remove on leave

  conn.on('message', handle );
});


var COMMANDS = {

  'COLOR': setColor,
  'MOVE': setPosition
};

function handle ( e ) {

  var msg = JSON.parse(e.utf8Data); // id, action, data

  var cmd = COMMANDS[msg.action];

  if ( cmd ) cmd( msg.id, msg.data );
}


function setColor ( id, color ) {

  COLORS[id] = color;

  sendAll( id, 'ADD', { id: id, color: color });
}

function setPosition ( id, pos ) {

  POSITIONS[id] = pos;

  sendAll( id, 'MOVE', { id: id, pos: pos });
}




function sendAll ( id, action, data ) {

  var msg  = JSON.stringify({ action: action, data: data }),

      keys = getKeys(CONNECTIONS);

  for ( var i = 0, l = keys.length; i < l; i++ ) {

    if ( i === id ) continue;

    CONNECTIONS[ keys[i] ].send( msg );
  }
}
