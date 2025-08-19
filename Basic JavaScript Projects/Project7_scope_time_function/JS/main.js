// Declare a global variable X with value 10
var X = 10;

// Function that adds 20 + X and writes the result to the document
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

// Function that adds X + 100 and writes the result to the document
function Add_numbers_2() {
    document.write(X + 100);
}

// Function that defines a local variable Y and writes Y divided by 5
function Add_numbers_3() {
    var Y = 50;
    document.write(Y / 5);
}

// Function that defines a variable Z and logs whether 15 is greater than Z (false) to the console
function ConsoleError() {
    var Z = 25;
    console.log(15 > Z);
}

// Function that checks a basic condition (1 < 2) and writes a message
function Conditional_1() {
    if (1 < 2)
        document.write("The left number is smaller than the number on the right.");
}

// Function that checks the current time and updates a page element with a greeting
function get_Date() {
    // If the hour is before 6PM
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }

    // If the hour is after 6PM
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    }
}

// Function that defines three numbers and checks a condition (but contains a mistake — see note)
function myConditional() {
    var X = 10;
    var Y = 15;
    var Z = 20;

    // This condition has a semicolon that ends it early; the following line will always run
    if (X + Z < Y);
    document.getElementById("Condition").innerHTML = "You did it!";
}

// Function that checks how many Goblins were entered and displays a message accordingly
function Goblin_Count() {
    Goblin = document.getElementById("Goblin").value; // Get the value entered in the input field

    // If the user has entered 35 or more goblins
    if (Goblin >= 35) {
        Statement = "You have slain enough Goblins";
    }
    // If they entered fewer than 35
    else {
        Statement = "You need to slay more Goblins!";
    }

    // Display the result in the HTML element with id="Goblin_Count"
    document.getElementById("Goblin_Count").innerHTML = Statement;
}

// Function that checks the current hour and displays a message about the time of day
function Time_function() {
    var Time = new Date().getHours(); // Get the current hour (0–23)
    var Reply;

    // This line is logically incorrect, but the intention is to check if the time is between 1 and 11
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    // This line is also trying to check if the time is between 12 and 17
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    // Otherwise, it's evening
    else {
        Reply = "It is evening time.";
    }

    // Display the result in the HTML element with id="Time_of_day"
    document.getElementById("Time_of_day").innerHTML = Reply;
}
