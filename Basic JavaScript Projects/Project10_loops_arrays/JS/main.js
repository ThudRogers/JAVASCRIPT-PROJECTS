// Function to demonstrate string length
function StringDemo() {
    let text = "Hello World!";             // Declare a string
    let length = text.length;              // Get the length of the string
    document.getElementById("ShowString").innerHTML = length; // Display the length in HTML
}

// Array of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; // Will hold concatenated output
var Y;            // Loop counter

// For loop to iterate through Instruments array
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; // Add each instrument plus line break
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; // Output to HTML
}

// Function demonstrating array indexing
function arrayFunction() {
    var playerAction = []; // Create an empty array
    playerAction[0] = "launched a nimble attack";
    playerAction[1] = "attempts to dodge an attack";
    playerAction[2] = "unleashes a slower powerful attack";
    playerAction[3] = "Uses a magical spell";
    playerAction[4] = "Uses an item in your backpack";

    // Display the first array element
    document.getElementById("Array").innerHTML = "The player " + playerAction[0] + ".";
}; 

// Function showing use of const object and updating its properties
function constantFunction() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; // Create constant object
    Musical_Instrument.color = "blue";   // Change a property value
    Musical_Instrument.status = "New";   // Add new property
    Musical_Instrument.price = "$1000";  // Add another property

    // Output to HTML using updated object
    document.getElementById("Constant").innerHTML =
        "The cost of the " + Musical_Instrument.status + " " +
        Musical_Instrument.color + " " + Musical_Instrument.type +
        " was " + Musical_Instrument.price;
}

// Function demonstrating block scope with let
function let218() {
    let X = 35;             // Number
    let Y = "I have ";      // String
    let Z = " eggs ";       // String
    document.getElementById("letCheck").innerHTML = (Y + X + Z); // Concatenate and output
}

// Function returning the value of PI
function returnPI() {
    return Math.PI;
}

// Object representing a goblin
let goblin = {
    health: 100,
    strength: 4,
    wisdom: 2,
    agility: 8,
    color: "Green",
    // Method to display goblin stats
    showStats : function() {
        return "A goblin with " + this.health + " health, " +
               this.strength + " strength, " +
               this.wisdom + " wisdom, " +
               this.agility + " agility, and " +
               this.color + " color.";
    }
}

// Function to display goblin stats on button click
function displayGoblinStats() {
    document.getElementById("Goblin_Stats").innerHTML = goblin.showStats();
}

// Function demonstrating use of break in a loop
function runBreakExample() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }                  // Exit loop when i == 3
        text += "The number is " + i + "<br>";   // Append current number
    }
    document.getElementById("break1").innerHTML = text; // Output result
}

// Function demonstrating use of continue in a loop
function runContinueExample() {
    let text = "";
    for (let i = 1; i < 10; i++) {
        if (i === 3) { continue; }               // Skip this iteration when i == 3
        text += i * 10 + "<br>";                 // Multiply i by 10 and add to output
    }
    document.getElementById("continue1").innerHTML = text; // Output result
}
