//Iterating an array using the forEach loop - logged to the console
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(colours){
  //colours is a placeholder, to store the foeEach result (call the placerholder anything relevant)
  console.log(colours);

});
//END




//custom myForEach loop called by  a forEach function

function myForEach(arr, func) {
  //loop through array
  for(var i = 0; i < arr.length; i++){
    //cal func for each item in array
    func(arr[i]);
  }
}

var colors = ["red","blue","green"];
//gets colors in array an alerts for each item in array - 3 alerts
myForEach(colors, alert) //alert will usually be an annon fucntion
//custom forEach function
myForEach(colors, function(colour) {
  console.log(colour);
});
