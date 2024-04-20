/*
given input [s,a,m,b,i,t]
return s-a-m-b-i-t
*/

const prompt = require("prompt-sync")();

let input = prompt("What is your name? ");
let string = input.split("");
let ans = string.join("-");
console.log(ans);
