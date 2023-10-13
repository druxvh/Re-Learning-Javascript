console.log("Hello BC");
/* Data types in Javascript
NNSSUBO
Null Number String Symbol Undefined Boolean Object
*/

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

    // For loops concept 
    // Sum of N numbers
let sum =0
let n = prompt()
n= Number.parseInt(n)
for (let i = 0; i < n; i++){
    sum += (i+1)
    console.log((i+1), "+")

}
console.log("sum of first" + n + "natural numbers is " + sum)
// Same program but for factorial
let factorial = 0;
let n = prompt()
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
    factorial += ((i+1)*1) //Shorthand property of factorial = factorial + value || (x = x + y)
}
console.log(factorial) 

// While & DO-While loops concept
let n = prompt()
n = Number.parseInt(n)
let i = 0
while (i < n){
    console.log(i)
    i++;
}
let n = prompt()
n = Number.parseInt(n)
let i = 0
do{
    console.log(i)
    i++;
}
while(i<n)

// Functions

 
let a = 403930349;
let b = "hey"
console.log(a + b)
*/

// Challenges 

    //Create 2 variables, firstName & lastName ; Concatenate two variables into one called "fullName" & then Log fullName into the console

const firstName = prompt("Your First Name : ")
const lastName = prompt("Your Last Name : ")

const fullName = firstName + " " + lastName

console.log(fullName)