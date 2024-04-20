/*
string1= "sambit"
string2="m"
return how many times have string2 been repeated in string1
*/
function repeatedStrings(string1, string2) {
  return string1.split(string2).length - 1;
}

let string1 = "Sambit_Bhattacharya";
let string2 = "a";
console.log(repeatedStrings(string1, string2));
