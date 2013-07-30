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

    // create the sphere's material
    var cubeMaterial = new THREE.MeshLambertMaterial(
    {
        color: clong.color
    });

    // set up the cube vars
    var cube_width = 100, cube_height = 100, cube_depth = 100, widthSegments = 10, heightSegments = 10, depthSegments = 10;

    // create a new mesh with cube geometry -
    // we will cover the cubeMaterial next!
    var cube = new THREE.Mesh(
       new THREE.CubeGeometry(cube_width, cube_height, cube_depth, widthSegments, heightSegments, depthSegments), 
       cubeMaterial);

    var radius = 100, tube = 10, radialSegments = 100, tubularSegments = 100;

    // add the cube to the scene
    scene.add(cube);

    // and the camera
    scene.add(camera);

    // create a point light
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
    directionalLight.position.set( -50, -50, 100 );

    // add to the scene
    scene.add(directionalLight);

    // draw!
    renderer.render(scene, camera); 

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

    animate();

  }
 
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }


})();
