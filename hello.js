// node.js getting started into the web server.


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



/*** alert and console. ***/
// alert("hello, it's me bishal");
// console.log("welcome to my learnings00");


// // values and variables.

// var myName = "bishal jung kunwar";
// var myAge = 23;

// console.log(myName + " is "+ myAge);



// // section 2, data types in JS.

// var myName = "bishal kunwar";
// console.log(myName);

// var myAge = 23;
// console.log(myAge);

// var isGraduate = true;
// console.log(isGraduate);
// console.log(typeof(isGraduate));


// // Data Types pracitces.

// checkNum1 = 5;
// checkNum2 = "6";

// // console.log(checkNum1+checkNum2);
// // console.log(checkNum1+ Number(checkNum2));
// // console.log(checkNum1-checkNum2); //bug of JS.
// // console.log(checkNum1-Number(checkNum2));

// console.log("bishal"+"kunwar"); // this gives the string concatination.
// // console.log("bishal"-"kunwar");



// // logical question. , difference between null vs undefined.
// var nullCheck = null;
// console.log(nullCheck+typeof(nullCheck)); // typeof(nullCheck) is the JS bug.
// nullCheck = 3;
// console.log(nullCheck); // so, basically is any variable/object is initialized with zero value for the future restoration.

// var myName; // "bishal", 3, = false , so if any object is assaigned as variable but no value is assaigned, that is the case of undefined.
// console.log(myName);
// console.log(typeof(myName));



// // logical question, what is NAN?
// // NAN means Not-A-Number., a variable in global scope.

// var number1 = "hello world"; // "hello world"; //2
// if(isNaN(number)){console.log("Please enter the valid intiger value");}else{console.log(number)};

// console.log(Number.number1);


// //var vs let vs const.





// // section 4, arithmetic operators in JS.

// console.log(20+3);


// // Assaignment Operators.
// // An Assaignment operator assaigns a value to its left operand based on the value of its right operand.
// // The simple assaignment operator is = - + / %,

// var x = 5
// var y = 5

// console.log("Is both the values of x and y equals? "+ x==y);
// console.log(`Is x equals to y: ${x == y}`);



// // Arithmetic Operators.
// // An Arithmetic Operators takes numerical values, either literals or variables as their operands and returns a single numerical value.

// console.log(6+6); // addition operator
// console.log(6-4); // subtraction operator
// console.log(20/5); // divisionOperator
// console.log(6*6); // multiplication operator
// console.log(21%5); // remainder operator



// // Increment and Decrement Operators.
// // pre ++x, --x. post operator x++, x--.

// var num = 12; // if cost used, throws error as const can't be changed after the assaignment. so based on the situation either var or let should be used for the inc dec operators.
// var num1 = 12;
// var num2 = 12;
// var num3 = 12;

// console.log(num++);
// console.log(++num1);
// console.log(num2--);
// console.log(--num3);

// // // Prefix increment operator means the variable is incremented first and then 
// // the expression is evaluated using the new value of the variable.



// // Comparison operators.

// // A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

// var a = 12;
// var b = 13;

// // Equals.
// console.log(a==b);

// // not equals.
// console.log(a!=b);

// // greater than.
// console.log(a>b);

// //less than.
// console.log(a<b)

// // b greater than or equals to a.
// console.log(a<=b);



// // Logical Operators.
// // Logical Operators are typically used with boolean (logical values) values, logical operator returns the boolean value.
// // && || !

// var a = 20;
// var b = 30;
// var c = 40;

// console.log(a>b && b>c && c>a);
// console.log(a>b || b>a);
// console.log(!(a>b&&b<c));



// // Section 5, String Concatenation(Operators).
// // The concationation operator + concatenates two string values together, returns union of strings.

// var myName = "Bishal";
// console.log("Hello" + "World");
// console.log(myName+"kunwar");
// console.log(myName+"yes");


// // small challenge time.

// console.log(3**3);
// console.log(10**-1);
// console.log(5+"bishal");


// // swap the numbers.

// var a = 5;
// var b = 6;

// // var c = b;
// // b=a;
// // a=c;

// // console.log("a = "+a+" b = "+b);

// a = a+b;
// b=a-b;
// a=a-b;

// console.log("a = "+a+" b = "+b);



// // difference between ==  and ===.

// var a = 2;
// var b = '2';

// console.log(a==b, a === b); // == checks the value equal or not, === check the datatype as well as the value equal or not.



// // Section 6, control statements.

// // 1. if...else, , if raining wear raincoat else no need.

// var day = "sunny";

// if(day == "sunny"){
//     console.log("wear the sunglasses");
// }else{
//     console.log("no need to wear sunglass");
//}


// // Challenge time. write a program to check the leap year. leap year has 365 days.

// const prompt = require('prompt-sync')();

// const year = prompt("Enter the year to check");

// // var year = 2013;

// if(year%4 === 0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log("The year is a leap year");
//         }else{
//             console.log("The year is not the leap year");
//         }
//     }else{
//         console.log("The year is the leap year");
//     }
// }else{
//     console.log("The year is not the leap year");
// }



// // conditional ternary operator.

// var age = 23;
// console.log((age<=18)?"Child":"Youth");


// // Switch Statement.
// // Evaluates an expression, executes the statement associated with the case.

// const prompt = require('prompt-sync')();

// const length = prompt("Enter the length");
// const breadth = prompt("Enter the breadth");
// const choice = prompt("Enter 1 for area\nEnter 2 for perimeter");

// switch(choice){
//     case '1':
//         console.log(`The area is ${length*breadth}`);
//         break;
    
//     case '2':
//         console.log(`The perimeter is: ${2(length+breadth)}`);
//         break;

//     default:
//         console.log("Please enter the valid number");
// };



// // While Loop Statement.
// // The while loop statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

// var num = 20;

// // while(num>=10){
// //     console.log(num);
// //     num--;
// // };

// // do while loop.
// do{
//     debugger;
//     console.log(num);
//     num--;
// }while(num >= 10);


// // for loop.
// for(var num1 = 0; num1<=10;num1++){
//     debugger;
//     console.log(num1);
// };




// // Challenging time.
// // Print the table of 5.

// const num = 5;
// for(let i = 1; i<=10;i++ ){
//     console.log(`${num}*${i}==${num*i}`);
// }




// Functions in JS.
// A JS function is a block of code designed to perform the particular task.
// we should define first and then should call that function to use it.


// var a = 2;
// var b = 3;

// var sum = a+b;
// console.log(sum);
 
// define the function.
// function sum(){
//     var a = 2;
//     var b = 3;

//     var total = a+b;
//     console.log(total+" is the sum");
// }

// sum(); // function calling.


// Function Parameter vs Function Arguements.
// Function parameters are the names listed in the function's definiton. whereas function arguements are the real values passed to the functions.

// function sum(a, b){
//     var total = a+b;
//     console.log(total);
// }

// sum(10,30);


function sum(a, b){
    var total = a+b;
    return total;
}

var result = sum(10,20);
var result1 = sum(20,30);
console.log(`the s,um of numbers is : ${result}`);
console.log(`the sum of the 2nd numbers is : ${result1}`);
console.log(`is result greater than result1? :- ${result>=result1}`);