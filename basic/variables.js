const accountId = 45952;
let accountEmail = "dpsingh87@gmail.com";
var accountPassword = "659865";
accountCity = "Jaipur";
let accountState;

// accountId = 6566868; // not allowed because it is constant value.

accountEmail = "minnu7648@gmail.com";
accountPassword = "698356";
accountCity = "Noida";

/* Prefer not to use var
   because of issue in block scope and functional scope 
*/ 

console.log("accountId");
console.table([accountId, accountEmail, accountPassword, accountCity]);