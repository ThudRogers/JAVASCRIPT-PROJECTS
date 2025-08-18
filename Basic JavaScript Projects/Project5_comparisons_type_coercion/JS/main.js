document.write(typeof "word"); // string
document.write(typeof 3); // number
document.write(typeof true); // boolean
document.write("27" + 3); // coercion to string


function my_Function() {

    document.getElementById("Test").innerHTML = isNaN('This is a string'); // true
    document.getElementById("Test").innerHTML += isNaN('007'); // false
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = 0 / 0; // NaN
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = 3E310; // Infinity

}

function my_Function4() {
    document.getElementById("Test4").innerHTML = -2E310; // -Infinity
}

function my_Function5() {
    document.getElementById("Test5").innerHTML = (10 > 2); // true
}

function my_Function6() {
    document.getElementById("Test6").innerHTML = (10 < 2); // false

}

function my_Function7() {

    document.getElementById("Test7").innerHTML = (10 == 10); // true
}

function my_Function8() {
    document.getElementById("Test8").innerHTML = (10 == 11); // false
}

function my_Function9() {
    document.getElementById("Test9").innerHTML = (10 === 10); // true
}
function my_Function10() {
    document.getElementById("Test10").innerHTML = (10 === "10"); // false
}

function my_Function11() {
    document.getElementById("Test11").innerHTML = (10 === 11); // false
}
function my_Function12() {
    document.getElementById("Test12").innerHTML = ("Ten" === "Fish"); // false
}

function my_Function13() {
    document.getElementById("Test13").innerHTML = (10 > 2 && 5 > 3); // true
}
function my_Function14() {
    document.getElementById("Test14").innerHTML = (10 > 2 && 5 < 3); // false
}
function my_Function15() {
    document.getElementById("Test15").innerHTML = (10 > 2 || 5 < 3); // true
}
function my_Function16() {
    document.getElementById("Test16").innerHTML = (10 < 2 || 5 < 3); // false
}
function my_Function17() {
    document.getElementById("Test17").innerHTML = !(10 > 2); // false
}
function my_Function18() {
    document.getElementById("Test18").innerHTML = !(10 < 2); // true
}

console.log(2 + 2); // 4
console.log(2 > 3); // false