function make_Words(){

var word_1= "Hello, "
var word_2= "I "
var word_3= "am "
var word_4= "writing "
var word_5= "a "
var word_6="sentence. "
var sentence = word_1.concat(word_2, word_3, word_4, word_5, word_6)
document.getElementById("Concatenate").innerHTML = sentence; 
}

function slicing(){
    var Sentence = "The Wizards are forming a group to combat all the Goblins in the forest";
    var Section = Sentence.slice(4, 12).toUpperCase();
    document.getElementById("Slice").innerHTML = Section;
}

function findWord() {
    var sentence = "The Goblins are in the forest";
    var index = sentence.search("Goblins");
    if (index !== -1) {
        var word = sentence.slice(index, index + 7); // "Goblins" is 7 letters
        document.getElementById("output").innerHTML = word;
    } else {
        document.getElementById("output").innerHTML = "Not found";
    }
}