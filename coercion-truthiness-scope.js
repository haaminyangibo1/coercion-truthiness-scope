console.log('\x1Bc'); // clears the console each run

/* ******************* coercion ******************* */
console.log('--------- coercion ---------');

/* Coercion occurs when the type of a value is change to a new type */

/* Explicit coercion happens when we use one of built-in global objects   to create a value of a new type */
let num = 10;
console.log(typeof num);
let string = String(num); // String global object
console.log(string);
console.log(typeof string);

/* implicit coercion also changes the type of a value */
/* unlike explicit coercion, implicit coercion is something that JavaScript does for us, behind the scenes */
/* this behavior can be very helpful, but it's important to understand how it works so we can anticipate what our code will do */
let sum = 10 + 20;
let concatenatedString = '10' + '20';
let notSure = 10 + '20'; // will this throw an error? return a value?
console.log('sum', sum);
console.log('concatenatedString:', concatenatedString);
console.log('notSure:', notSure); 

/* where does 1020 come from? note it's the same value as concatenating '10' and '20' */
/* the + operator will implicitly coerce a number to a string if you try to 'add' it to a string */  
let willBeAString = '10' + 20 + 30 + 40 + 50;
console.log(willBeAString);
console.log(typeof willBeAString);

/* where does 1020 come from? note it's the same value as concatenating '10' and '20' */
/* the + operator will implicitly coerce a number to a string if you try to 'add' it to a string */  
let alsoAString = 10 + 20 + 30 + 40 + '50';
console.log(alsoAString);
console.log(typeof alsoBeAString);

/* avoid using the == operator, because it uses a large set of rules to    implicitly coerce values to the same type before comparing them. */
10 == 10; // => true, makes sense
10 == '10'; // => true, also makes sense
'true' == true; // => false, kinda weird
'' == false; // => true, kinda weird
true == '1'; // => true, kinda weird*
/* *behind the scenes, JS coerced both of these values to numbers:
   true coerced to 1
   '1' coerced to  1
   1 == 1 => true
*/

/* ******************* truthiness ******************* */
console.log('--------- truthiness ---------');
// values can be coerced to boolean values, too
let newBool = Boolean('i am a string');
console.log(newBool); // will this be true or false?

/* when coercing a value to boolean, JS uses rules to decide if a value   should be coerced to true or false */
/* values coerced to true are called "truthy" */
/* values coerced to false are called "falsey" */

/* Most values are truthy */
console.log(Boolean('i am a string')) // strings with length are truthy
console.log(Boolean(10)); // any non-zero number is truthy  
console.log(Boolean(['i', 'am', 'an', 'array'])); // all arrays are truthy 
console.log(Boolean({i: 'am', an: 'object'})); // all objects are truthy

/* These are the only falsey values */
console.log(Boolean('')) // empty string
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

/* Recall how a conditional expression works in an if statement */
// if the expression below evaluates to true, the if block will run
if (5 > 0) {
  console.log('in the if');
}
else {
  console.log('in the else');
}

/* What if the conditional expression evaluates to a non-boolean value? */
if ('apples') {
  console.log('in the if');
}
else {
  console.log('in the else');
}

/* JS will implicitly coerce the result of an expression in a conditional    to a boolean value */
if (10) {
  console.log('yes');
}
else {
  console.log('no');
}
if (0) {
  console.log('yes');
} else {
  console.log('no');
}

/* The ! operator coerces a value to a boolean value that's opposite of   its truthiness (that's why ! is also called the not operator) */
console.log(!true);
console.log(!'abc');
console.log(!100);
console.log(!['an', 'array']);
console.log(!{an: 'object'});

/* You can use !! to explicitly coerce a value to a boolean value that    reflects its truthiness (not not) */
console.log(!!true);
console.log(!!'abc');
console.log(!!100);
console.log(!!['an', 'array']);
console.log(!!{an: 'object'});

/* Logical operators also coerce values to boolean values */
if (10 && 20) {
  console.log('both 10 and 20 are truthy values');
}

/* Logical operators also coerce values to boolean values */
if (10 && 0) {
  console.log('this will not be logged');}
else {
  console.log('zero is falsey');
}

/* && returns the first falsey value, or the last value if all are    truthy */
let returnedValue1 = 10 && 'apples' && 0 && null;
console.log('returnedValue1:', returnedValue1);
let returnedValue2 = 'lucky' && 'number' && 7;
console.log('returnedValue2:', returnedValue2);

/* || returns the first truthy value, or the last value if all are    falsey */
let returnedValue3 = null || undefined || 'happy' || 'pumpkin';
console.log('returnedValue3:', returnedValue3);
let returnedValue4 = false || null || 10 < 0 || NaN;
console.log('returnedValue4:', returnedValue4);

/* ******************* scope ******************* */
console.log('--------- scope ---------');
/* Scope refers to which variables can be accessed by your code at a    specific location in your code. */
let wow = 'wow';
console.log('I can access wow because it is in scope:', wow);

/* JS is 'lexically scoped', which means the location at which a variable   is declared determines its scope. */
/* A variable that is declared outside of a function is globally scoped;   it can be referenced from any line of code throughout the file */
let global = 'ear';
console.log('outer', global);
function funFunction() {
  console.log('inner', global);
}
funFunction();

/* Even though a global variable can be referenced from anywhere in your   code, the value assigned to the variable cannot be accessed until after    the assignment operation occurs. */
// console.log(waitForIt);
// let waitForIt = 'here I am';
// console.log(waitForIt);

/* Variables declared inside of a function are 'locally-scoped'. */
/* They cannot be referenced outside of the function. */
// function happyFunction() {
//   let message = 'I am so happy!';
//   console.log(message);
// }
// happyFunction();
// console.log(message);

/* What if a variable is defined locally and globally? */
let message = 'think globally';
function logAMessage() {
  let message = 'act locally';
    // JS will look for message locally, first  console.log(message);
}
logAMessage();

/* What if a variable is defined locally and globally? */
function logAMessageLocal() {
  let msg = 'act locally';
  /*
    if it can't find it locally, JS will look at the scope outside the
    function, this case, the global scope
  */
  console.log(message);
}
logAMessageLocal();

/* parameters are also locally scoped */
function logAMessageParam(message) {
  console.log(message);
}
logAMessageParam('act locally');

/* consider nested functions */
let globalVar = 'global';
function outer() {
  let outerVar = 'outer';
  function inner() {
    let innerVar = 'inner';
    console.log(globalVar, outerVar, innerVar);  }
  inner();
}
outer();


/* the pre-ES6 var keyword ignores block scope */
if (true) {
  var block = 'Jenny from the';
  console.log(block, 'block');
}
console.log(block);

/* functions generally should not change globally scoped variables */
let alwaysTrue = true;
function dontMindMe() {
  let alwaysTrue = false; // this is ok, just creating a local variable
}
dontMindMe();
if (alwaysTrue) {
  console.log('all is well');
} else {
  console.log('everything is broken');
}