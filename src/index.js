
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0) return [];
  let i = 0;
  while(i < matrix.length){
    if(i % 2 !== 0)
    matrix[i] = matrix[i].reverse();
    i ++;
  }
  let newArr = [].concat(...matrix);
  return newArr;
 
}
