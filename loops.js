function forLoop(array){
  for(var i=0; i<25;i++){
    array= [...array, `I am ${i} strange loops.`]
  }
  return array;
}