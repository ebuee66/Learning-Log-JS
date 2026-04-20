const Title = 'high school student login';
const Description = 'Welcome to the high school student portal. Please log in to access your grades and other information.';
const infoMessage = 'if you have a login trouble, please contact the school administration for assistance.';
const signInMessage = 'successfully signed in. Welcome';
const userName = 'Mary';
const passWord = 'MaryMary123';
let mathGrade = 85; 
let PhysicsGrade = 90;
let ChemistryGrade = 80;


console.log(Title);
console.log(Description);
console.log(infoMessage);

const readline = require("readline");

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.question("User Name:",function(userName_1){
    rl.question("Password:",function(password_1){
        if(userName_1===userName && password_1===passWord){console.log(signInMessage);
        console.log('Math Grade:'+mathGrade+'\nPhysics Grade :'+PhysicsGrade+'\nChemistry Grade:'+ChemistryGrade);
        } else {
            console.log("Login failed! Please check your username and password and try again.")
        }
        rl.close();
    
    });
});