function Add(){ // Function to add two numbers
    var addition = 5 + 3; 
    document.getElementById("Add").innerHTML = "The result of 5 + 3 is: " + addition;
}

function Subtract(){ // Function to subtract two numbers
    var subtraction = 10 - 4;
    document.getElementById("Subtract").innerHTML = "The result of 10 - 4 is: " + subtraction;
}
function Multiply(){ // Function to multiply two numbers
    var multiplication = 6 * 7;
    document.getElementById("Multiply").innerHTML = "The result of 6 * 7 is: " + multiplication;
}
function Divide(){ // Function to divide two numbers
    var division = 20 / 4;
    document.getElementById("Divide").innerHTML = "The result of 20 / 4 is: " + division;
}

function more_Math(){ // Function to perform a more complex mathematical operation
    var simple_Math = ( 1 + 2) * 10 / 2 -5; 
    document.getElementById("more_Math").innerHTML = "The result of 1 plus 2 multiplied by 10 divided by 2 and then subtracted by 5 equals: " + simple_Math;
} 
function Modulate(){ // Function to find the modulus of two numbers
    var modulus = 25 % 6;
    document.getElementById("Modulate").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negation_Operator() { // Function to demonstrate the negation operator
    var x = 10;
    document.getElementById("negation_Operator").innerHTML = "The negation of 10 is: " + -x;
}

var X = 5; // Variable declaration and initialization
X++; 
document.write(X);

var Y = 5.25; // Another variable declaration and initialization
Y--; 
document.write(Y);

window.alert(Math.random() * 100); // Function to generate a random number between 0 and 100

function addPi(){ // Function to add two instances of Pi
    var Z =Math.PI + Math.PI;
    document.getElementById("addPi").innerHTML = "The value of Pi + Pi is: " + Z;
}