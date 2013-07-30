// define([], function(){
(function(){

  var maxPlayers = 4;

  var part = clong.config.size.width / maxPlayers;

  clong.players = [];

  function Player ( id, color ) {

    this.echoes = [];

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

    var cube = new THREE.Mesh( geometry, cubeMaterial );

    cube.position.x = ( id * part ) - cube_width/2;
    cube.position.y = cube_height/2;

    scene.add(cube);
  }

})();
