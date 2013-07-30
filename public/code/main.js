// require([], function(){
(function(){

  init();

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

    x = $(window).width() - 20 ;
    y = $(window).height() - 30 ;

    // set the scene size
    var WIDTH = x,
        HEIGHT = y;

    // set some camera attributes
    var VIEW_ANGLE = 45,
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;

    // get the DOM element to attach to
    // - assume we've got jQuery to hand
    var $container = $('#game');

    // create a WebGL renderer, camera
    // and a scene
    renderer = new THREE.WebGLRenderer();
    camera = new THREE.PerspectiveCamera(  VIEW_ANGLE,
                                    ASPECT,
                                    NEAR,
                                    FAR  );
    scene = new THREE.Scene();

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

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }


})();
