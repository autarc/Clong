// define([], function(){
(function(){

  // var ID = null;
  var socket = null;

  clong.createSocket = function createSocket(){

    socket = new WebSocket( 'ws://' + location.host );

    socket.onopen = function ()  { console.log('[OPEN]');  };
    socket.onclose = function () { console.log('[CLOSE]'); };

    socket.onerror = function ( e ) { console.log('[ERROR] - ', e ); };

    socket.onmessage = function ( e ) {

      var msg = JSON.parse( e.data );

      clong.handle( msg.action, msg.data );
    };
  };

  clong.send = function send ( action, data ) {

    var msg = JSON.stringify({ id: clong.id, action: action, data: data });

    socket.send( msg );
  };

})();
