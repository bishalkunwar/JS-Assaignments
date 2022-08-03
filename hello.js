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


// function sum(a, b){
//     var total = a+b;
//     return total;
// }

// var result = sum(10,20);
// var result1 = sum(20,30);
// console.log(`the s,um of numbers is : ${result}`);
// console.log(`the sum of the 2nd numbers is : ${result1}`);
// console.log(`is result greater than result1? :- ${result>=result1}`);


// // Modern JavaScript. ES6.

// // 1. Let and Const 
// // var --> Function Scope, Let and const --> Block scope. const is the constant.


// var myName = "Bishal Kunwar";
// console.log(myName);

// myName = "changed to sujan";
// console.log(myName);



// let myName = "Bishal Kunwar";
// console.log(myName);

// myName = "changed to sujan";
// console.log(myName);



// const myName = "Bishal Kunwar";
// console.log(myName);

// myName = "changed to sujan";
// console.log(myName);




// function bioData(){
//     var fName = "Bishal";
//     console.log(fName);

//     if(true){
//         var lName = "Kunwar";
//         console.log("innner defined "+lName);
//         console.log("outer defined "+fName);
//     }

//     console.log("internal scope lName "+lName);
// }

// console.log("core inner "+ fName);

// bioData();



// // let based.

// function bioData(){
//     const fName = "Bishal";
//     console.log(fName);

//     if(true){
//     const lName = "Kunwar";
//     console.log("innner defined "+lName);
//     console.log("outer defined "+fName);
//     }

//     console.log("internal scope lName "+lName);
// }

//     // console.log("core inner "+ fName);

// bioData();




// // 2. Template Literals.
// // JavaScript program to print table for given number (8)

// for(i=1;i<=10;i++){
//     let tableNumber = 8;
//     // console.log(tableNumber+"*"+i+"=="+tableNumber*i);
//     console.log(`${tableNumber} * ${i} == ${tableNumber*i}`);
// }


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string = string+"\n";
// }
// console.log(string);



// // default paramater. it avoids the error NAN,
// function mult(a=1, b=2){
//     return a*b;
// }

// console.log(mult(2,3));




// // ES6, Fat Arrow Function.
// const mult = (a=1, b=2)=>{
//     return a*b;
// }

// console.log(`The multiplication of given number is ${mult(5,6)}`);

// // difference between normal function and fat arrow function is that, 




// // Arrays in JavaScript.

// // when we feel like storing multiple values in one variable then instead of var , we will use an array.
// // In JavaScript we have an Array class and arrays are the prototype of this class.
// // examples:-


// // Array Traversal.
// var myBros = ['bishal', 'rozan', 'santosh', 'roshan' ];
// console.log(myBros[myBros.length-1]);


// difference between for in loop and for of loop. / was introduced in ES6.

// var myBros = ['bishal', 'rozan', 'santosh', 'roshan' ];
// // for (var i=0;i<myBros.length;i++){ 
// //     console.log(myBros[i]);
// // } // this is the traditional appraoch of iterating array elements.

// for(let elements in myBros){
//     console.log(elements);
// } // iterates the indexes.

// for(elements of myBros){
//     console.log(elements);
// } // iterates the index values.


// // Array.Prototype.forEach()
// myBros.forEach(function(element, index, array){
//     console.log(`element ${element} at index : ${index} of : ${array}`);
// }); // forEach loop is the combination of for in and for of loop.

// myBros.forEach((element, index, array)=>{
//     console.log(`element ${element} at index : ${index} of : ${array}`);
// })


// var myBros = ['bishal', 'rozan', 'santosh', 'roshan', 'ram', 'shyam', 'hari' ];

// // 2.  Searching and Filter in an array.  array subsection 2.
// // Array.prototype.indexOf() :

// // Returns the first (least) index of an elemet within the array equal to an element, or -1 if none is found. It search the element from the 0th index number.

// var myBros = ['bishal', 'rozan', 'santosh', 'roshan', 'ram', 'shyam', 'hari' ];
// console.log(myBros.indexOf('santosh')); // forward searching.
// console.log(myBros.lastIndexOf("rozan", 5)); // backward searching.

// // Array.prototype.includes().
// // Determines whether the array contains a value, returns true or false as appropriate.

// console.log(myBros.includes("rozan"));
// console.log(myBros.includes("sita"));


// // Array.prototype.find() .
// // returns the found element in the array, if some element in the array satisfies the testing function or udefined if not found.  only problem is that it returns only one element.

// const prices = [ 200, 300, 350, 400, 500, 450, 550];

// const findElement = prices.find((currVal)=>currVal<400);
// console.log(findElement);

// const findAnotherElement = prices.find((currValue)=>currValue>200);
// console.log(findAnotherElement);


// array.prototype.findIndex().
// returns the indexnumber, if not found the index number then will return -1

// console.log(prices.findIndex((currValue)=>currValue>450));



// // array.prototype.filter.
// // Returns a new array containing all elements of the calling array for which the provided filtering fuction returns true.
// const newTag = prices.filter((elem, index)=> {return elem>200});
// console.log(newTag);


// // Array subsection . how to sort an array.
// // Array.prototype.sort().
// // The sort() method sorts the element of an array in place and returns the sorted array. the default sort order is ascending, built upon converting the elements into strings. then comparing their sequences of UTF-16 code units values.

// const months = ['march', 'jan', 'april', 'feb', 'dec', 'nov', 'sept'];
// console.log(months.sort());


// // const array1 = [1, 30, 4, 21, 100000, 99];
// // console.log(array1.sort());

// // However, if numbers are sorted as strings, 
// // "25" is bigger than "100", because "2" is bigger than "1".

// // Because of this, the sort() method will produce an incorrect 
// // result when sorting numbers.



// // Array subsection 4 ==> perform crud.
// // Array.prototype.push() the push() method adds one or more element to the end of an array and returns the new length of the array.

// const animals = ['cat', 'dog', 'rhino'];
// animals.push("bagh", "syal");

// // animals.forEach((element, index, array)=>{
// //     console.log(`${element} at ${index}`);
// // })

// // Array.Prototype.unshift()
// animals.unshift("gandhi", "koirala");
// animals.forEach((element, index, array)=>{
//     console.log(`${element} at ${index}`);
// })


// // 2nd example.
// const myNumbers = [1,2,3,4,5];
// myNumbers.unshift(6,7);
// console.log(myNumbers);


// // Array.prototype.pop() .
// // The pop() method removes the last element from an array and returns that element, this method changes the length of the array.

// const plants = ['broccoli', 'cabbage', 'cauli', 'venta', 'chipleventi'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// // shift() method.
// console.log(plants.shift());
// console.log(plants);


// // splice() method does all the work of unshift push pop and shift.

// const months = ['jan', 'april', 'feb', 'august', 'june'];
// // // add dec at the end , update april to April, delete feb.

// // months.splice(months.length-3, 0, 'happy');
// // console.log(months);
// // months.splice(2, 1 );
// // console.log(months);
// const indexOfMonth = months.indexOf('august');
// if(indexOfMonth!=-1){
//     const updateMonth = months.splice(indexOfMonth, 1);
//     console.log(months);
// }else{
//     console.log("no match");
// }
// // months.splice(0,1,'newJan');
// // console.log(months);



// Map Reduce Filter.
// Array.Prototype.map()
// let newArray = arr.map(callback(currebtValue, index, array){
//     returns element of new array, after executing something.
// }[thisArg]);

// Returns a new array containing the results of calling a function on every element in this array.


// const array1 = [1, 3, 4 , 9 , 5 , 6, 7 ];
// // // num>5
// // let newArray = array1.map((currElement, index, array)=>{
// //     return currElement>=5;
// // });

// // console.log(newArray);
// // console.log(array1);

// let newArray = array1.map((element, index, array)=>{
//     return `index number: ${index} has the element: ${element} from the array: ${array}`
// })

// let newArrayFor = array1.forEach((element, index, array)=>{
//     return `index number: ${index} has the element: ${element} from the array: ${array}`
// });
// console.log(newArrayFor);

// console.log(newArray);


// // Challenging question, find the square root of each element in  an array, let arr = [25,36,49,64,81];
// let arr = [25,36,49,64,81];
// let arrSquare = arr.map((element, index, array)=>{
//     return Math.sqrt(element);
// });

// console.log(arrSquare);


// let arr = [2,3,4,5,6,7,8];

// let newArray = arr.map((element, index, array)=>{
//     return element*2;
// }).filter((element)=>{return element>10}).reduce((accumulator, element, index, arary)=>{return accumulator += element});

// console.log(newArray);



// // Reduce method.
// // Reduce method is used to flatten an array, to reduce 2/3 dimensional array to single one.
// // the reducer function takes four arguements, accumulator, current value, current index, source array.

// let arr1 = [5,6,2];
// let sum = arr1.reduce((accumulator, element, index, array)=>{
//     return accumulator += element;
// })

// console.log(sum);

// const arrayNew = [['zone1', 'hello', 'felow'], ['zone2', 'second'], ['new', 'one']];

// let flatter = arrayNew.reduce((accumulator, element)=>{
//     return accumulator.concat(element);
// })

// console.log(flatter);






// // Getting started with the Strings.

// // A JavaScript String is a zero or more characters written inside quotes.
// //JS Strings are used for storing and manipulating texts.
// // Strings can be created as primitives.
// // From String literals, or as objects, using the String() constructor.


// let myName = "Bishal Kunwar";
// let myLearning = "Computer Science";

// console.log(`myName is ${myName} and i am learning ${myLearning}`);
// console.log(myName.length);
// // let courseName = new String("Freelancing") // string constructor.

// let anySentence  = 'I am the "Real" hero';
// let anotherSentence = "I am the \"Real\" hero";
// console.log(anySentence);
// console.log(anotherSentence);


// // Finding a string in a string.

// // String prototype.indexOf((searchValue, fromIndex)).

// const myData = "Hello I am Mr . Bishal Kunwar, a noob coder";
// console.log(myData.indexOf("Bishal"));


// // Search a string in a string.

// const myData = "Hello I am Mr . Bishal Kunwar, a noob coder";
// sData = myData.search("Bishal");
// console.log(sData);


// Extracting String Parts

// there are 3 methods of extracting a part of a string.

// slice(start, end) , substring(start, end), substr(start, length).

// Ths slice() method extracts a part of a string and returns the extracted part in a new string.
// the method takes 2 parameters : the start and the end position,


// var str = "Apple, Banana, Kiwi";

// let res = str.slice(8,-1);
// console.log(res);


// // challenging time,

// // display only 20 characters of a string like the 280 words used in twitter.
// let myMessage = "afds dasfadsf gfger gsd vc rtwe hg  yt u yu re  rew re  rt rt rth  yt  ui ytu rt  g gf f fe wre t r rt";
// let actualMessage = myMessage.slice(0,20);
// console.log(actualMessage);


// // The substring() Method.
// // the substring() methdo is similar to slice().

// // The difference is that substring() cannot accept the negative indexes.

// var str = "apple, banana, caty";
// let res = str.substring(2,8);
// console.log(res);


// // The substr() method.
// // the substr() method is similar to slice.
// // the difference is that the second parameter specifies the length of the extracted part.

// var str = "Apple, Banana, Kiwi";
// let res = str.substr(0,5);
// console.log(res);


// var str = "Apple, Banana, Kiwi";
// let res = str.substr(-8);
// console.log(res);



// // Replacing String Content().
// // String.prototype.replace(searchFor, replaceWith).

// // The replace() method replaces a specified value with another value in a string.

// // let myBiodata = "Hello, i was sujan at school but now i am Bishal, Bishal";
// // let changed = myBiodata.replace("Bishal", "Rambahadur");

// let myBiodata = "Hello, i was sujan at school but now i am Bishal, Bishal";
// let changed = myBiodata.replaceAll("Bishal", "Rambahadur");

// console.log(changed);
// console.log(myBiodata);


// // Points to remember.
// // 1. The replace() method does not change the string. It is called on. It returns a new String.
// // 2. By default, the replace() method replaces only the first match.
// // 3. By default, the replace() method is case sensetive, case must be matched to be replaced.



// // Extracting String Characters.
// // There are 3 methods for extracting the String Character.

// // The charAt() method, it returns the character at a specified index (position) in a string.

// let string1 = "HELLO WORLD";

// // console.log(string1.charAt(3));
// // console.log(string1.charCodeAt(3));


// // Property Access. ES5(2019) allows property access [] on strings.
// let string1 = "HELLO WORLD";
// console.log(string1[3]);



// // Other useful methods.
// // the concat() joins two or more settings.

// let fName = "Bishal";
// let lName = "Kunwar";

// console.log(fName.toUpperCase());
// console.log(lName.toLowerCase());

// console.log(fName+" "+lName);
// console.log(fName.concat(" ",lName));
// console.log(`${fName} ${lName}`);


// // String.trim()
// // The trim() method removes whitespace from both sides of a string.
// var str = "       Hello world      ";
// console.log(str.trim());


// // Converting a Strig to an Array.
// // A String can be converted to an array with the split() method.

// var text = "a,b,c,d,e";
// console.log(text.split(","));
// console.log(text.split(" "));
// console.log(text.split("|"));


//Date and Time Methods in JS (get and set).

// JavaScript Data objects represent a single moment in time in a platform-independent format.
// Date objects contain a number that represent milliseconds since 1970 january 1 UTC.

// Creating Date Objects
// There are 4 ways to create a new date object.

// let curretDate = new Date(); // Date objects are created with the new Date() constructor.
// // console.log(curretDate);
// console.log(curretDate.toLocaleString());
// console.log(curretDate.toString());

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // basically , it takes 7 arguements.
// let currentnew Date(milliseconds)
// // we can not avoid month section.
// new Date(date String)
// console.log(Date.now());


// let thatTime = new Date(0);
// console.log(thatTime);

// let currentDate = new Date();
// console.log(currentDate.toString());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());

// console.log(currentDate.setFullYear(2023));
// console.log(currentDate.setMonth(8));


// // Time methods.
// let timeNow = new Date();
// console.log(timeNow.getTime());
// console.log(timeNow.getHours());
// console.log(timeNow.getMinutes());
// console.log(timeNow.getSeconds());
// console.log(timeNow.getMilliseconds()); 

// // Time methods.
// let timeNow = new Date();
// console.log(timeNow.setTime());
// console.log(timeNow.setHours());
// console.log(timeNow.setMinutes());
// console.log(timeNow.setSeconds());
// console.log(timeNow.setMilliseconds());  these all methods will throw the error NAN.


// setInterval(myFunction, 1000);
//         function myFunction(){
//             let dateTime = new Date();
//             // dateTime.setHours(9);
//             document.getElementById("pass").innerHTML = dateTime.toString();
//         }


// // Practice time.
// new Date().toLocaleTimeString(); // 11:18:25 AM
// new Date().toLocaleDateString();
// new Date().toLocaleString();



// Section 9.

// JavaScript Math object.

// The JavaScript Math object allows us to perform mathematical tasks on numbers.

// console.log(Math.PI);
// console.log(Math.round(2.7786));
// console.log(Math.pow(3, 3));
// console.log(Math.sqrt(105));
// onsole.log(Math.abs(-21));
// console.log(Math.abs(2-4));
// console.log(Math.floor(4.3));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(2.03));
// console.log(Math.trunc(-11.21));
// console.log(Math.trunc(21.3));

// console.log(Math.min(10, 20, 30, 40, 50, 60));
// console.log(Math.max(10, 20, 30, 40, 50, 60));

// console.log(Math.floor(Math.random() * (50-40+1)) + 40);



// Section 10, window documents and objects models. 

// Windows vs Documents in JavaScript.

// Windows is the main container or we can say the global object and any operations related to entire browser window can be a part of window object.
// Whereas the DOM is the child of window object.

// All the members like objects, methods, or proporties, if they are the part of window object then we do not refer the window object, whereas in th DOM we need to refer the document if we want to use the document object, methods and proporties.

// window.location or like window.location.href // location.href.


// Window has methods, properties and object. example: setTimeout() or setInterval() are the methods, where as Document is the object of the Window and it also has a screen object with properties describing the physical display.
// Document is just the object of the global object that is window, which deals with the document, the HTML elements themselves.


// DOM vsBOM.

// BOM --> Browser Object Model --> includes: navigator, scree, location, frames, history, XML HttpRequest
// DOM --> Document Object Model --> includes all related html elements .
// JavaScript --> object, array, functions.


// Functions alert/confirm/prompt are also a part of BOM:
// They are directly not related to the document;
// but represent pure browser methods of communicating with the user.


// Navigating through the DOM.

// 1. document.getElement returns the element that is the root element of the document.
// 2. document.head
// 3. document.body
// 4. document.body.childNodes (includes tab, enter and whitespace) // list of the direct children only.
// 5. document.children (without texts nodes, only regular elements)
// 6. document.childNodes.length.

// *** Practice time ***

// How to do check whether an element has child nodes or not?
// we will do use hasChildNodes() // this will return the boolean value true or false.

// how to find the child in DOM tree

// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChid.firstElementChild.style.color = "red";
// vs
// document.querySelector(".child-two").style.color="yellow";

// How to find the parent nodes.
// document.body.parentNode
// document.body.pareneElement


// How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling.
// document.body.previousElementSibling


// How to do search the elements and the references , 
// it is at the specific html file.



// Events in Js

// HTML events are "things" that happen to HTML elements.
// when JavaScript is used in HTML pages, JavaScript can "react" on these events.

// HTML Events.
// An HTML event can be something the browser does or something a user does.
// Here are some examples of HTML Events.

// An HTML web page has finished loading.
// an HTML input field was changed.
// An HTML button was clicked, 
// often, when events happen, you may want to do something.

// JS lets you execute code when events are detected.

// HTML allows event handler attributes , with JS code to be added to HTML elements.



// section 1️ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File



// section 2️: What is Event Object?
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.



// section ️4️ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// Section 5️ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.


 
// JavaScript Timing Events.

// The window object allows execution of code at specified time intervals, these intervals are called timing events.
// Two key method to use with JavaScript are: 
// setTimeout(function, milliseconds)
// executes a function , after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the fuction continuously.


// setTimeout() , clearTimeout() , setInterval() , clearInterval() .



// OOP's inJs
// Object Literals. it is simply a key:value pair data structure.
// storing variables and functions together in one component, we can refer this as an object.

// example -- school bag holds water bottle, tiffin, books, scarf.

// ways of creating an object:

// // 1st way,

// let myBio = {

//     myData:{
//         myName: "Bishal",
//         myAge: 23,
//     },

//     myAddress:{
//         current:"Gongabu",
//         permanent: "Baglung",
//     },
 
//     // getData: function(){
//     //     console.log(`My name is ${myBio.myName} and my age is ${myBio.myAge}`);
//     // }

//     getData(){
//         console.log(`My name is ${myBio.myData.myName} and my permanent address is ${myBio.myAddress.permanent}`);
//     }

// }

// console.log(`My name is ${myBio.myData.myName} and my current address is ${myBio.myAddress.current}`);
// console.log(myBio.getData());


// what is this object.
// The definition of "this" object is that it contains the current context.
// The this object can have different values  depending where it is placed/

// for example : 
// console.log(this) // it refers to the current context and that is window global object.

// console.log(this.alert('Awesome'));
// // this refers to the current cotext and that is window global object.

// // example 2: 
// function myName(){
//     console.log(this);
// }

// myName();


// var name = "Bishal";
// function myName(){
//    console.log(this.name);
// }

// myName();


// const obj = {
//     myAge: 23,

//     myAgeNow(){
//         console.log(this.myAge);
//     }

// }

// obj.myAgeNow();


// const obj = {
//     myAge: 23,
//     myAgeNow: ()=>{
//         console.log(this);
//     }
// }

// obj.myAgeNow(); // this pushes us to the window feature at web console. // if we do use fat arrow function, then we cannot do use this .


// let bioData = {
//     myNames:{
//         name: "bishal",
//         nick: "sujan",
//     },

//     myAge: 26,

//     getData(){
//         console.log(`my name is ${this.myNames.name} and i am ${this.myAge} years old`);
//     }
// }

// bioData.getData();



// var vs let vs const done, template strings done, arrow function done, default arguements done, 
// getting started with destructuring.



// // Array destructuring.
// const myBioData = ["Bishal", "Kunwar", 23];

// // let myFName = myBioData[0];
// // let myLName = myBioData[1];

// // console.log(`my first name is ${myFName} and last name is ${myLName}`);

// // Destructuring here, position of object assaignments matters a lot while destructuring.
// let [myFName, myLName, myAge, myDegree="BCS"] = myBioData;
// console.log(myDegree);


// // object destructuring.
// let myBio = {
//     firstName: "Bishal", secondName:"kunwar", age:23
// }

// let {firstName, secondName, age, myDegree="BCS"} = myBio;

// console.log(firstName);



// // Object properties.
// // we can now use dynamic properties.

// let myName = "Bishal";
// const myBio = {
//     [myName] : "Hello, how are you",
//     [20+3]: ",you are right?"
// }

// console.log(myBio);

// const myName = "Bishal"; const myAge = 23;

// let  bio = {
//     myName, myAge
// }

// console.log(bio);



// // Spread Operator.

// const colors = ["red", "yellow", "green", "blue"];
// const myColors = ["yellow", "red", "Purple", "black"];

// const myFavColors = [...colors, "purple", "black"];
// console.log(myFavColors);


// // ES7 / ECMA Script 2016.

// // Array.Prototype.include or simply array.include.
// let colors = ["red", "yellow", "green", "blue"];
// const isIcluded = colors.includes("red" && "yellow"&& "green"&& "blue");
// if(isIcluded){
//     let newColors = [...colors];
//     console.log("Yes, it includes")
//     console.log(newColors);
// }
// else{
//     console.log("not id does not includes includes");
// }



// // Exponentiation Operator
// console.log(2**5)



// // ECMA Script 8, 2017.
// // the new feature async await was introduced.


// // pasStart and padEnd.
// let myName = "Bishal".padStart(8);
// let myAge = "23".padEnd(10);
// console.log(myName+"Hello word");
// console.log(myAge);


// // Object.values()
// const person = {name:"bishal", age:23};
// console.log(Object.values(person));
// console.log(Object.entries(person)); 



// // ES9 . 2018

// const person1 = {name:"bishal", age:23};
// const person2 = {...person1};
// console.log(person1);
// console.log(person2);



// // ES 2019.

// // flatten an array.
// const array1 = [['a1', 'b1'], ['c1', ['d2','e3']], ['f1', 'f2',  ['d2','e3', 'f3'], ['a1', 'b1']]];
// // let flatArray1 = array1.reduce((accumulator, currentValue)=>{
// //     return accumulator.concat(currentValue);
// // })

// // console.log(flatArray1); // this was the issue in reduce function property . 

// // // but using flat we can overcome this one.


// console.log(array1.flat(Infinity));


// const person1 = {name:"bishal", age:23};
// const arrObject = Object.entries(person1);
// console.log(arrObject);
// console.log(Object.fromEntries(arrObject));


// // ES 2020.
// // BigInt
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(oldNum+500);

let newNum = 9007199254740991n + 8n;
console.log(typeof(newNum));
console.log(newNum);

