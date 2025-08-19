// Concatenates multiple words into a single sentence
function make_Words() {
    var word_1 = "Hello, "
    var word_2 = "I "
    var word_3 = "am "
    var word_4 = "writing "
    var word_5 = "a "
    var word_6 = "sentence. "
    // Use .concat() to join all words into one string
    var sentence = word_1.concat(word_2, word_3, word_4, word_5, word_6)
    // Display the result in the "Concatenate" paragraph
    document.getElementById("Concatenate").innerHTML = sentence;
}

// Extracts part of a string using slice() and makes it uppercase
function slicing() {
    var Sentence = "The Wizards are forming a group to combat all the Goblins in the forest";
    // Slice from character index 4 to 12 ("Wizards") and convert to uppercase
    var Section = Sentence.slice(4, 12).toUpperCase();
    // Show result in the "Slice" paragraph
    document.getElementById("Slice").innerHTML = Section;
}

// Searches for the word "Goblins" in a sentence
function findWord() {
    var sentence = "The Goblins are in the forest";
    // Search returns the index of the word or -1 if not found
    var index = sentence.search("Goblins");
    if (index !== -1) {
        // Extract the word "Goblins" (7 letters long) using slice
        var word = sentence.slice(index, index + 7);
        document.getElementById("output").innerHTML = word;
    } else {
        // If not found, display "Not found"
        document.getElementById("output").innerHTML = "Not found";
    }
}

// Converts a number into a string
function string_Method() {
    var X = 257;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Formats a number to a specific precision
function precision_Method() {
    var X = 12345.67891011121314;
    // toPrecision(10) keeps 10 digits in total
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// Rounds a number to the nearest integer using toFixed()
function Fixed() {
    var X = 12.34567891011121314;
    // toFixed() with no arguments rounds to 0 decimal places
    document.getElementById("Fixer").innerHTML = X.toFixed();
}

// Demonstrates the valueOf() method for a string
function the_Value() {
    var str = "I am a Wizard";
    // valueOf() just returns the primitive string value
    var value = str.valueOf();
    document.getElementById("Value").innerHTML = value;
}
