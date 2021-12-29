
// Print the numbe rin array in reverse - for loop
function printReverse(arr){
    for(var i = arr.length - 1; i >=0; i--){
      console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);



//isUniform - take array and check if all array items are the same or not - for loop

function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

isUniform([1,1,1]);


//sumArray - take a single array and sums every item inside

function sumArray(arr){
  var total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}

sumArray([10,10,10]);

//returns max/greatest number in aray

function max(arr){
  var max= arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

max([1,20,10]);
