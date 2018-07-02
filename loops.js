function forLoop(array){
  for(var i=0; i<25;i++){
    array= [...array, `I am ${i} strange loop.`]
  }
  return array;
}

function whileLoop(num){
  while(num >0){
    console.log(num);
    num--;
  }
  return "done";
}

function doWhileLoop(array){
  while(maybeTrue()&&array.length>0){
    array.pop();
  }
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}