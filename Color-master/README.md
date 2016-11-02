# Color
This program is a library of functions that give us useful information about the colors codes on the computer. **rgb** is an array that holds the the color values, red, green, and blue to mix together to make any color. Red is the first item, green in the middle and blue last. To complete this assignment you must make 5 functions in this object library. If you finish early I can invent other challenges. [Website using these tools](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)

### Beginning Setup

  -  Declare the **Color Object** using our new keyword. Consult our notes if you are unsure how to do this.
  -  Complete the first function **isColor**. Analyze what I have pre-written for you and finish the function.

### Intensity Functions

  -  You will create 3 functions that all essentially work the same way: **redIntensity()**, **greenIntensity()**, and **blueIntensity()**.
  -  Each function will grab its proper color from **rgb** and return the percent of that color it is.
  -  Think about what the maximum number is for each color.
  -  Use Math.Round() to help provide an accurate percent to one decimal place. [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
  -  Ex: 0.3456 ----> 34.6% Do not include the percent sign in your function, just the number.


### Brightness
Background information: Black is the absence of color while white is all colors full-throttle. With numbers this means that the rgb codes for black and white are `[0,0,0]` and `[255,255,255]` respectfully.

  -  Create a new variable named bright.
  -  Bright should be equal to the average intensity of rgb: The sum of all three intensities divided by 3.
  -  Return the value bright;


### Complement Function

  -  The complement of a color is what will make that specific color add to white.
     So if c =`[100,150,200]`, then c's complement is `[155,105,55]`
  -  Create an empty array named comp.
  -  Make a for loop that runs 3 times and pushes the complement of R, G, and B
  -  Return the comp array.


### Extra Challenge: Grey Scale Function

  -  This function will return an rgb array just like complement did.
  -  First would will create a variable and average R, G, and B.
  -  Then you will create an array that uses the average value three times.
  -  Return the new grey scale array.

### Double Extra Challenge: Tints, Tones, and Shades

  - A **tint** is mixing a color with white.
  - A **tone** is mixing a color with grey.
  - A **shade** is mixing a color with black.
