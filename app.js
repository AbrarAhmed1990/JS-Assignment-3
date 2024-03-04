// <------ Chapter NO 9 ------>
// Q no: 1

// var city = "Karachi";
// if (prompt("Enter your city name") === city){alert("Welcome to city of light")}
// else if(prompt !== city){alert("Thanks for your visit")}
// else (prompt !== city);{};

// Q no: 2

// var genderMale = "Male" , genderFemale = "Female" ;
// if (prompt("Enter your Gender") === genderMale){alert("Good Morning Sir.")}
// else if(prompt !== genderMale){alert("Good Morning Ma'am.")}
// else (prompt !== genderFemale,genderMale);{};

// Q no: 3

// var r = "Red" , y = "Yellow" , g = "Green" ;

// if (prompt("Enter traffic light color") === r){alert("Must Stop")}
// else if (prompt === y) {alert("Ready to Move")}
// else if (prompt === g) {alert("Move Now")}
// else (prompt !== r,y,g); {};

// Q no : 4

// var fuel = 0.25 ;

// if (prompt("Enter Remaining Fuel") <= fuel){alert("Please refill the fuel in your car")};

// Q no : 5 a)

// var a = 4; 

// if (++a === 5){
// alert("given condition for variable a is true")};

// Q no : 5 b)

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true")};

// Q no : 5 c)

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true")};

// Q no : 5 e)

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals")};

// Q no : 5 f)

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// Q no : 6

var physicsMarks = +prompt("Enter your Marks in Physics") ,
chemistryMarks = +prompt ("Enter your Marks in Chemistry") ,
biologyMarks = +prompt ("Enter your Marks in Biology") ;

var totalMarks = (physicsMarks+chemistryMarks+biologyMarks) ;

var finalResult = (physicsMarks+chemistryMarks+biologyMarks/300*100) ;

if (finalResult >= "80"){message="A+"}
else if (finalResult >= "70"){message="A"}
else if (finalResult >= "60"){message="B"}
else if (finalResult >= "50"){message="C"}
else if (finalResult >= "35"){message="D"};

alert(message);





