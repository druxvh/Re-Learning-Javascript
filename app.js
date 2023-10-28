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

// Challenges 

    //Create 2 variables, firstName & lastName ; Concatenate two variables into one called "fullName" & then Log fullName into the console

const firstName = prompt("Your First Name : ")
const lastName = prompt("Your Last Name : ")

const fullName = firstName + " " + lastName

console.log(fullName)
// Create a function that logs out "hi there, linda called"


let name = prompt("Name")
let greeting = "Hi there,"

console.log(greeting, name, "tried to call you!")

22
18
65
14 XXX => 59
4
1114

let sentence = ["hey", "i'm", "dhruv"]
let greet = document.querySelector("#greeting")
console.log(greet)
for (let i = 0; i < sentence.length; i++) {
    greet.textContent += sentence[i] + " "
}



let person = {
    name: "DM",
    age: 21,
    country: "India"
}

function logData() {
    console.log(person.name, "is", person.age, "years old & lives in", person.country)
}

logData()


let countries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
countries.pop()
countries.push("Pakistan")
countries.shift()
countries.unshift("China")
// countries.pop()

for (let i = 0; i < countries.length; i++) {
    console.log("- " + countries[i]) // 'i' is just a looping number getting added into the countries array and because of the looping number we can see the countries name within the array -> its like array[i] -> array[1] then array[2] etc...
}
// China Pakistan
// console.log()



//random property from an array

let hands = ["rock","paper","scissors"]
function getHand() {
    let random = Math.floor(Math.random() * 3)
    return hands[random]
}

console.log(getHand())
// Sorting function is JS
let fruits = ["🍎", "🍎", "🍊", "🍊", "🍎", "🍊", "🍎"]
let appleShelf = document.getElementById("apples")
let orangeShelf = document.getElementById("oranges")

function sort(){
    for (let i = 0; i < fruits.length; i++){
        if (fruits[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruits[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
sort()

console.log(fruits)
console.log(appleShelf)
console.log(orangeShelf)


            //Asynchronous Javascript-->

        // Callback Function --> forming relationships between functions is called a callback!

        let order = (call_parameter) => {
            console.log("order working")
            call_parameter()
        }
        let call = () =>{
            console.log("call function working withing order function")
            setTimeout(()=>{
                console.log("msg show after 10 sec")
            },10000)
            
        }
        order(call) //call_parameter is a parameter can be replaced with whatever function we want to (forms a relationship)
*/
var a = 5;
function fn(){
    console.log(a)
    var a = 9;
}

fn()