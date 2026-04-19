const Title = 'Welcome to Java Basics';
const loginMessage = 'Please enter your username and password to continue.';
const Description = 'Learn the basics of Java programming language, including syntax, data types, and object-oriented programming concepts.';
const studentName = 'Ebubekir Celik';
const studentAge = 25;
let process='First Week Java Basics';  
let passWord='JavaIsFun123';
let userName='ebubekir.celik';

console.log(Title);
console.log(Description);
console.log(loginMessage);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("User Name: ", function(userName_1) {
     rl.question("Şifre: ", function(Password_1) {
    if(userName_1 === userName && Password_1 === passWord){
        console.log("Login successful! Welcome, " + studentName + "!"); 
        console.log('Student Name: ' + studentName  + '\nStudent Age: ' + studentAge + '\nCurrent Process: ' + proccess);
    } else {
        console.log("Login failed! Please check your username and password and try again.");
    }
    rl.close();
});


});