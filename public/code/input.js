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

  KeyboardJS.on('c', function() {

  	resolution = 100;
	var amplitude = 100;
	size = 360 / resolution;

  	var geometry = new THREE.Geometry();
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
