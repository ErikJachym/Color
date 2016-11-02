//Declare the Color Object with our new keyword below here.
const color = new Object;

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >=0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >=0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
 let redIntensity = Math.round (rgb[0]/255*100);
 return redIntensity;

};

//greenIntensity
Color.greenIntensity = function(rgb){
 let greenIntensity = Math.round (rgb[1]/255*100);
 return greenIntensity;

};

//blueIntensity
Color.blueIntensity = function(rgb){
 let blueIntensity = Math.round (rgb[2]/255*100);
 return blueIntensity;

};

//brightness
let bright = function(rgb){
  let bright = ((rgb[0])+(rgb)[1])+(rgb[2])/3);
  return bright;
};

//complement
