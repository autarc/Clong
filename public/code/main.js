// require([], function(){
(function(){

  init();

  lines_array = [];

  function init(){

    var colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('change', function setColor() {

      clong.color = colorPicker.value;

      colorPicker.removeEventListener('change', setColor );

      colorPicker.parentNode.removeChild(colorPicker);

      clong.createSocket()

      init_game();

      init_player();

      animate();

    });

  }

  function init_game() {

    // set the scene size
    var WIDTH = clong.config.size.width,
        HEIGHT = clong.config.size.height;

    // set some camera attributes
    var VIEW_ANGLE = 45,
        ASPECT     = WIDTH / HEIGHT,
        NEAR       = 0.1,
        FAR        = 10000;

    // get the DOM element to attach to
    // - assume we've got jQuery to hand
    var $container = $('#game');

    // create a WebGL renderer, camera
    // and a scene
    var renderer = new THREE.WebGLRenderer();
        camera   = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        scene    = new THREE.Scene();

    // the camera starts at 0,0,0 so pull it back
    camera.position.z = 1000;

    // start the renderer
    renderer.setSize(WIDTH, HEIGHT);

    // attach the render-supplied DOM element
    $container.append(renderer.domElement);

    // and the camera
    scene.add(camera);

    // create a point light
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
    directionalLight.position.set( -50, -50, 100 );

    // add to the scene
    scene.add(directionalLight);

  }

  function redraw_line(line) {

    scene.remove(line);

    var amplitude = line.amplitude;

    amplitude+=1;

    var posi = line.position;

    var geometry = new THREE.Geometry();
    for(var i = 0; i <= resolution; i++) {
        var segment = ( i * size ) * Math.PI / 180;
        geometry.vertices.push(new THREE.Vector3( Math.cos( segment ) * amplitude, Math.sin( segment ) * amplitude, 0 ));
    }

    var new_line = new THREE.Line( geometry, material );

    new_line.position = posi;

    new_line.amplitude = amplitude;

    lines_array.push(new_line);

    scene.add(new_line);
  }

  function animate() {

    requestAnimationFrame( animate );

    for (var j=0; j<lines_array.length; j++) {
      redraw_line(lines_array.shift());
    }
    renderer.render( scene, camera );
  }

})();
