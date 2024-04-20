/*
 write a funtion to return factorial of given number
 !5=5x4x3x2x1
*/
function factorial(n) {
  let result = 1;
  let array = [];
  for (let i = n; i > 0; i--) {
    array.push(i);
  }
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}
console.log(factorial(20));
