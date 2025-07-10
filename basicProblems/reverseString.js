var word = function (string) {
 let str = string.split("").sort();

//  check vowels
 let result = string.match(/[aeiou]/gi);
 console.log(result);
 
 return str;
}

console.log(word("deepak"))