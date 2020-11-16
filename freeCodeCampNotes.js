//******JavaScript Comments******
//Single line comment
/*Multi-line
comment*/


//Declare JS Variables  ------  Use 'let' vs 'var'
var exampleName;
let exampleName;


//Storing Values with the Assignment Operator
let abc;
abc = 38;    //abc will store 38


//Assigning the Value of One Variable to Another
let cat = 10;
let dog = cat; // dog = 10


//Initializing Variables with the Assignment Operator
let car = 'Mustang';


//Understanding Uninitialized Variables - When Variables are declared they have an initial value of 'undefined'.
var ten = 10;
var five = 5;
var sentence = 'I am a ';

ten = ten + 5;  // 15
five = five + 1;  // 6
sentence = sentence + 'string';  //'I am a string'


//Add two numbers with JS
let sum = 10 + 20; //30


//Subtract One Number from Another  with JS
let difference = 30 - 20; //10


//Multiply 
let multi = 10 * 8; //80


//Divide
let divide = 10 / 2; //5


//Increment a number with JS  - Using ++ to add 1 number
let myVar = 68;
myVar++; //69


//Decrement a number with JS  - Using -- to subtract 1 number
let myVar = 70;
myVar--; //69


//Create Decimal numbers with JS
let myDecimal = 3.8;


//Multiply two decimals with JS
let prod = 2.0 * 3.5; //7


//Divide one Decimal by Another with JS
let quotient = 4.4 / 2.0; //2.2


//Finding a Remainder in JS   - Using "Remainder operator" (%)
let remainder = 11 % 3;


//Compound Assignment with Augmented Addition
let addMore = 10;
addMore += 20; //30


//Compound Assignment with Augmented Subtraction
let subMore = 50;
subMore -= 20; //30


//Compound Assignment with Augmented Multiplication
let multiMore = 3;
multiMore *= 10; //30


//Compound Assignment with Augmented Division
let divMore = 12;
divMore /= 3; //4


//Declare String Variables  ---  "String literals(strings) are characters enclosed in quotes"
let name = 'Sadie';//'Sadie'


//Escaping Literal Quotes in Strings - In JS you can "escape" a quote from considering it as an end of string quote by placing a backslash(\) in front of the quote
let myStr = "This is a \"double quoted\" string"; //"This is a "double quoted" string"


//Quoting Strings with Single Quotes
let goodStr = 'He said "hey let\'s go" to her'; //'He said "hey let's go" to her'


//Escape Sequences in Strings
//  \'  Single quote
//  \"  Double quote
//  \\  Backslash
//  \n  New line
//  \r  Carriage return
//  \t  Tab
//  \b  Word boundary
//  \f  Form feed


//Concatenating Strings with Plus Operator
let newSentence = 'Hello ' + 'Goodbye'; //'Hello Goodbye'


//Concatenating Strings with the Plus Equals Operator
let newSent = 'Hello';
newSent += 'Goodbye'; //'Hello Goodbye'


//Constructing Strings with Variables
let mysteryInc = meddlingKids
let capture = 'those' + mysteryInc + 'and that dog'; //'those meddling kids and that dog'


//Appending Variables to Strings
let goDo = 'get this!!!!';
let newLine = 'I will ';
newLine += goDo; //'I will get this!!!!'


//Find the Length of a String
let newName = 'pumpkinhead';
newName.length; //10
//******Another example
let cool = 0;
let newCool = 'ScoobyDoo';
cool = newCool.length; // cool = 9


//Use Bracket Notation to Find the First Character in a String
let firstName = 'Dobobo';
firstName[2]; //b
//*****Another example
let secondName = 'Charles';
let firstLetter = secondName[1]; //h


//Understand String Immutability
//*******Cannot change characters in strings
let myStr = 'Bob';
myStr[0] = 'J'; //Won't work

let myStr = 'Bob';
myStr = 'Job'; //Works to change to 'Job'


//Use Bracket Notation to Find the Nth Character in a String
let firstFirst = 'Jedi';
let secondSec = firstFirst[1]; //'e'


//Use Bracket Notation to Find the Last Character in a String
let firstCar = 'Dakota';
let lastLetter = firstCar[firstCar.length - 1]; //'a'


//Use Bracket Notation to Find the Nth-to-last Character in a String
let firstCar = 'Dakota';
let nthLast = firstCar[firstCar.length - 3]; //'o'


//Mad libs
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = " " + myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;


//Store Multiple Values in one Variable using Javascript Arrays
let arrayo = ['Lucky', 13, 'Burrito']; //['Lucky', 13, 'Burrito']


//Nest one Array within Another Array
let arraYo = [['Lucky' 13], [2, 'Burrito' ]]; //[['Lucky' 13], [2, 'Burrito' ]]


//Access Array Data with Indexes
let argh = ['green', 40, 30];
argh[2]; //30
//or
let pugh = argh[0]; //'green'


//Modify Array Data with Indexes
let argh = ['green', 38, 10];
argh[0] = 13; //[13, 38, 10]


//Access Multi-Dimensional Arrays with Indexes
var arr = [
    [3, 5, 2],
    [6, 1, 8],
    [[10, 9, 3], 5, 13]
];

arr[2]; //[[10, 9, 3], 5, 13]
arr[2][1]; //[10, 9, 3]
arr[2][1][0] //10


//Manipulate Arrays with .push()  -------- Adds to end of Array
var myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog', 3]); //[['John', 23], ['cat', 2], ['dog', 3]]


//Manipulate Arrays with .pop()  -------- Removes end of Array
var threeArr = [8, 3, 9];
var oneDown = threeArr.pop();
console.log(oneDown); //9
console.log(threeArr); //[8, 3]


//Manipulate Arrays with .shift()  -------- Removes first element of Array
let newArr = ['Simpson', 5, ['Homer', 1]];
let secAarr = newArr.shift();
console.log(secArr); //'Simpson'
console.log(newArr); //[5, ['Homer', 1]]


//Manipulate Arrays with .unshift()  ------- Adds elements to front of Array
let ourArray = ['Simpson', 5, ['Homer', 1]];
ourArray.unshift('Bart'); //['Bart', 'Simpson', 5, ['Homer', 1]]

//Example removing then adding first element
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]



//Example Function and the Function being called
function reusableFunction() {
    console.log('Hi World');
}

reusableFunction(); //'Hi world'


//Passing Values to Functions with Arguments



