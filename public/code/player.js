// define([], function(){
// (function(){

  var part = clong.config.size.width / clong.config.maxPlayers;

  clong.players = [];
  clong.player  = null;

  function Player ( id, color, pos ) {

    this.id = id;

    this.color = color;

    this.echoes = [];

    this.echoes.push(sound);

    // create the cube's material
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: color });

    // set up the cube vars
    var cube_width     = 100,
        cube_height    = 100,
        cube_depth     = 100,
        widthSegments  =  10,
        heightSegments =  10,
        depthSegments  =  10;

    var geometry = new THREE.CubeGeometry(cube_width, cube_height, cube_depth, widthSegments, heightSegments, depthSegments ),

        cube     = new THREE.Mesh( geometry, cubeMaterial );


    var x = id * cube_width,
        y = id * cube_height;

    if ( pos ) {

      x = pos.x;
      y = pos.y;
    }

    cube.position.x = x;
    cube.position.y = y;

    scene.add(cube);

    this.cube = cube;

  }

// })();
