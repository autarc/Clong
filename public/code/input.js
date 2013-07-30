// define([], function(){
(function(){

  // Keyboard
  KeyboardJS.on('w', function() {
    clong.player.cube.position.y+=5;

    clong.send('MOVE', { y: clong.player.cube.position.y, x: clong.player.cube.position.x  });
  });

  KeyboardJS.on('a', function() {

    clong.player.cube.position.x-=5;
    clong.send('MOVE', { y: clong.player.cube.position.y, x: clong.player.cube.position.x  });
  });

  KeyboardJS.on('s', function() {
    clong.player.cube.position.y-=5;
    clong.send('MOVE', { y: clong.player.cube.position.y, x: clong.player.cube.position.x  });
  });

  KeyboardJS.on('d', function() {
    clong.player.cube.position.x+=5;
    clong.send('MOVE', { y: clong.player.cube.position.y, x: clong.player.cube.position.x  });
  });


  KeyboardJS.on('c', function() {

  	var resolution = 100,
  	    amplitude  = 100,
  	    size = 360 / resolution;

    var geometry = new THREE.Geometry(),

  	    material = new THREE.LineBasicMaterial( { color: clong.color, opacity: 1.0, linewidth: 3} );

  	for(var i = 0; i <= resolution; i++) {

       var segment = ( i * size ) * Math.PI / 180;
  	   geometry.vertices.push(new THREE.Vector3( Math.cos( segment ) * amplitude, Math.sin( segment ) * amplitude, 0 ));
  	}

  	var new_line = new THREE.Line( geometry, material );

  	new_line.position = cube.position.clone();

  	new_line.amplitude = amplitude;

  	lines_array.push(new_line);

  	scene.add(new_line);

  });


  // Mouse

  // Controller

})();





// if ( !navigator.gamepads ) {

//   navigator.gamepads = navigator.webkitGamepads || navigator.mozGamepads; // || navigator.webkitGetGamepads
// }

// if ( !navigator.gamepads ) return alert('NO GAMEPAD SUPPORT');

