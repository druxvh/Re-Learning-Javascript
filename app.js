console.log("Hello BC");

// Practise Sets

/* 
// Age prompt using logical operators (age should be under 10 to 20)
let a = prompt()
if (a >=10 && a <= 20) {
    console.log("Yes your age is ok");
} else {
    console.log("its not okay");
}

// Your AGe using Switch Cases
let age = prompt("Whats your Age?")
switch(age){
    case '10' :
        console.log("its 10");
        break;
        case '11' :
            console.log("its 11");
            break;
    case '12' :
        console.log("its 12");
        break;
        case '13' :
            console.log("its 13");
            break;
        }
        
        let num = prompt("your age");
        num =Number.parseInt(num);
        // Parse.int will convert the string to a number (by default prompt typeof value is string)
        if (num % 2 == 0 || num % 3 == 0) {
            console.log("no divisible by 2 or 3")
        } else {
            console.log("no is not divisible by 2 or 3")
        }


    // age greater than 18 function using ternary operator (?)

let a = prompt();
console.log(a >18? "YOu can drive" : "You cannot drive" );
*/
    // For loops concept
let sum =0
let n = prompt()
n= Number.parseInt(n)
for (let i = 0; i < n; i++){
    sum += (i+1)
    console.log((i+1), "+")

}
console.log("sum of first" + n + "natural numbers is" + sum)