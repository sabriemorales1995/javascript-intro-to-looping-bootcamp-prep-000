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