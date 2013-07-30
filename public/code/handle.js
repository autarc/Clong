/**
 *  Handle
 *  ======
 *
 *  Delegate remote actions and execute them localy
 */

// define([], function(){
(function(){


  var commands = {

    'REGISTER' : register,
    'ADD'      : addPlayer,
    'MOVE'     : movePlayer,
    'COLOR'    : changeColor

  };


  /**
   *  [handle description]
   *  @param  {[type]} action [description]
   *  @param  {[type]} data   [description]
   *  @return {[type]}        [description]
   */
  function handle ( action, data ) {

    commands[ action ]( data );
  }


  clong.handle = handle;


  /**
   *  [register description]
   *  @param  {[type]} id [description]
   *  @return {[type]}    [description]
   */
  function register ( id ) {

    if ( !clong.id ) clong.id = id;

    var player = new Player( id, clong.color );

    clong.player = player;

    clong.send( 'COLOR', clong.color );
    clong.send( 'MOVE', { x: player.cube.position.x, y: player.cube.position.y });
  }


  function addPlayer ( data ) {

    var player = new Player( data.id, data.color, data.pos );

    clong.players[ data.id ] = player;
  }

  /**
   *  [movePlayer description]
   *  @param  {[type]} id   [description]
   *  @param  {[type]} posX [description]
   *  @param  {[type]} posY [description]
   *  @return {[type]}      [description]
   */
  function movePlayer ( data ) {

    var player = clong.players[ data.id ];

    player.cube.position.x = data.pos.x;
    player.cube.position.y = data.pos.y;
  }


  /**
   *  [changeColor description]
   *  @param  {[type]} id    [description]
   *  @param  {[type]} value [description]
   *  @return {[type]}       [description]
   */
  function changeColor ( id, value ) {

  }



})();
