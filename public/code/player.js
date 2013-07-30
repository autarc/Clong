// define([], function(){
(function(){

	init_player = function () {
		// create the cube's material
	    var cubeMaterial = new THREE.MeshLambertMaterial(
	    {
	        color: clong.color
	    });

	    // set up the cube vars
	    var cube_width = 100, cube_height = 100, cube_depth = 100, widthSegments = 10, heightSegments = 10, depthSegments = 10;

	    // create a new mesh with cube geometry
	    cube = new THREE.Mesh(
	       new THREE.CubeGeometry(cube_width, cube_height, cube_depth, widthSegments, heightSegments, depthSegments), 
	       cubeMaterial);

	    // add the cube to the scene
	    scene.add(cube);
	}

})();
