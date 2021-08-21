
let btn = document.getElementById('btn');
let box = document.querySelector('.container');
let boxAction = document.querySelector('.container-action');
let rgbBox =  document.getElementById('rgb');
let hexaBox =  document.getElementById('hexa');


function random_bg_color() {

      // Get a random number between 64 to 256 (for getting lighter colors)
      let red = Math.floor(Math.random() * 256) ;
      let green = Math.floor(Math.random() * 256) ;
      let blue = Math.floor(Math.random() * 256) ;

      // Construct a color withe the given values
      let rgb = red + "," + green + "," + blue
      let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
      let bodyColor = "rgba(" + green/2 + "," + blue/2 + "," + red/2 +"," + 0.1 + ")"

      // Set the background to that color
      box.style.background = bgColor;
     /*  boxAction.style.background = bodyColor; */
      document.body.style.background = bodyColor ;
      rgbBox.value = "rgb(" + rgb + ")";
      hexaBox.value =rgb_to_hex(bgColor);
    

    }

    btn.addEventListener('click',()=>{
        random_bg_color();
    });
  

    function rgb_to_hex(colorval){
	 
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    	
        delete(parts[0]);
    	
        for (var i = 1; i <= 3; ++i) {
            parts[i]= parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i]= '0' + parts[i];
        }
    	
        return '#' + parts.join('');
	
    }