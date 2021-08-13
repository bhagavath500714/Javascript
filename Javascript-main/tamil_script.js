// =========== Data type ==========
// Number
// anthing with in single quote string
// var x = 0;  // number
// var x = [];   // object
// NanN - not a number (during mathematical operation result is not known then it shows NaN)
// infinity 1/0 = infinity 
// null - of type object
// undefined - veriable is not declared
// =========Deceleration=========
// var x;
// =========Initilization=========
// var x = 123;  if we give = value
// var x = () => true; // or var x = function() {}   // function
// console.log (typeof x);

// ===========JS Hoisting & Scope ==========
// it's like flag hosting bring to top
// --------variable hosting ------


// function test() {
//     console.log(x);
// }

// test();

// var x;
// const y = 'asd';
// let z =234;

// how js engine  run means first scans from top to bottom 
// if we call y also it will give undefined because func called befor inatilized

// var x;
// var y;
// var z;

// function test() {
//     console.log(y);
// }

// test();

// x;
// y = 'asd';
// z =234;

// ----------------------------

// var a = {name: 'aji'}

// function test() {
//     console.log(a.name);
// }

// test();

// var x;
// const y = 'asd';
// let z =234;
// 1. decalre the variable as 
// var a
// test function
// var x
// var y
// let z
// 2. value assign to a name then test()
// next y='asd'
// z=234;
// like that 
// -------------------------
// error
// cannot read property 'name' of undefined (check the parent of name eg b.name cannot find bname )

// ------------function hosting ------ 
//  ------ named function ----
// function test() {
//     console.log('hello');
// }
// annonimus function  -- per ellathaa 
// var x = function() {
//     console.log('hai')
// }
// test(); 
// x();

// if we change function to top

// test(); 
// x();

// function test() {
//     console.log('hello');
// }

// var x = function() {
//     console.log('hai')
// } 

// result will be it will print hello becaue it's named function 
// name function  will read and initilzed 

// js engine will change like this
// var x;
// function test() {
//     console.log('hello');
// }
// test();
// x();


// x = function() {
//     console.log('hai')
// } 


// ============== Scope ========
// in function what are the memory avilable (while running a function what are the values in memory is called scope)

// var testVar = 123;
// function test() {
//     var x = 'jai';
//     console.log(x);
//     debugger;
// }

// test();

// testVar is global variable u can seen in debugger in chrome side panel
// x is a local variable

// ========= chnging values window alert ======

// window.alert = (input) => console.log(input);

// var x = () => {
//     alert('hai');
// }

// x();

// ================ Data type conversion =======
//  var x = '123';
 // var y = parseInt(x);  // convert to number if it has alphabet at 3rd plce it will take first 2 eg - x= 123a123, x=a123 result will be NaN

//  var x = '123.123';
//  var y = parseFloat(x); // convet string to float no 

// var x = '123';

// var y = +x; // will give as number try to conver all string if we give alphabet will say as NaN

//  console.log(typeof x, x);
//  console.log(typeof y, y);

// -------example------------
// var x = '123';
// var y = '123';
// console.log(x+y);
// console.log(parseInt(x) + parseInt(y));
// console.log(+x+ +y); //  + convert to number

// ---------convert to string -----
// var x = [123, 12];
// console.log(x.toString());

// in chrome console type var x = 123
// x.__proto__
// select down arrow __proto__