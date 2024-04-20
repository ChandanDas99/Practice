/*write a funtion to return prime number less than the given number.
if negetive number is given, it will return 0.
Nx1=N 
*/

function PrimeNumberCheck(n) {
  if (n <= 1) {
    return 0;
  }
  for (let i = 2; i <= n / i; i++) {
    if (n % i === 0) return 0;
  }
  return n;
}

function primesLessThanN(n) {
  let primes = [];
  for (let i = 2; i < n; i++) {
    if (PrimeNumberCheck(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const givenNum = 83;

if (givenNum <= 0) {
  return console.log(0);
} else {
  console.log(`The given Prime number is: ${givenNum}`);
  console.log(primesLessThanN(givenNum));
}

// console.log(prime(97));
// const f = prime(97);
// let array = [];
// if (f === 0) {
//   return 0;
// } else array.push(f);
// console.log(array);
