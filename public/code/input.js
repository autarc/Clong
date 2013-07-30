// define([], function(){
(function(){

  // Keyboard
  KeyboardJS.on('w', function() {
    cube.position.y+=5;
  });

  KeyboardJS.on('a', function() {
    cube.position.x-=5;
  });

  KeyboardJS.on('s', function() {
    cube.position.y-=5;
  });

  KeyboardJS.on('d', function() {
    cube.position.x+=5;
  });


  // Mouse


  // Controller

})();
