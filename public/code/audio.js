/**
 *  Audio
 *  =====
 *
 *  Create Audio
 */
var sound;
// define([], function(){
(function(){

	

	var startVolume = 50;

	soundManager.setup({
		url: '../../swf/',
	  	flashVersion: 9, // optional: shiny features (default = 8)
	  	// optional: ignore Flash where possible, use 100% HTML5 mode
	  	preferFlash: false,
	  	onready: function() {
			sound = soundManager.createSound({
				id: "test",
				url:"../StarWars.mp3",
				autoLoad: true
			});
								
	  	}
	});

		  	

	function loopSound(s) {
	    s.play({
	   		onfinish: function() {
	   			console.log("I should restart")	   			
	    		loopSound(s);
	    	}
	    });
	}

	function getSound() {
		return sound;
	}

	
	
})();
