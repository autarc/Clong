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
    });

  }


  function render(){


  }


  function update(){


  }


})();
