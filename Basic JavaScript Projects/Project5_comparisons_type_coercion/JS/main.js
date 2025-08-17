document.write(typeof "word"); // string
    document.write(typeof 3); // number
    document.write(typeof true); // boolean
    document.write ("27" + 3); // coercion to string


    function my_Function() {
        
        document.getElementById("Test").innerHTML = isNaN('This is a string'); // true
        document.getElementById("Test").innerHTML += isNaN('007'); // false
    }

    function my_Function2() {
        document.getElementById("Test2").innerHTML = 0/0; // NaN
    }

    function my_Function3() {
        document.getElementById("Test3").innerHTML =3E310; // Infinity
        
    }

    function my_Function4() {
        document.getElementById("Test4").innerHTML = -2E310; // -Infinity
    }

    function my_Function5() {
        document.getElementById("Test5").innerHTML =(10>2); // true
    }

    function my_Function6() {
        document.getElementById("Test6").innerHTML = (10<2); // false
    }