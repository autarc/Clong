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

    clong.id = id;
  }


  /**
   *  [movePlayer description]
   *  @param  {[type]} id   [description]
   *  @param  {[type]} posX [description]
   *  @param  {[type]} posY [description]
   *  @return {[type]}      [description]
   */
  function movePlayer ( id, posX, posY ) {

    // position ? movement on a grid ?
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
