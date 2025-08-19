function countdown() {
    // Get the value entered in the input field with id="seconds"
    var seconds = document.getElementById("seconds").value;

    // Inner function that runs the countdown every second
    function tick() {
        // Subtract 1 second on each call
        seconds = seconds - 1;


        TimeRanges.innerHTML = seconds;

        // Call tick() again after 1000 milliseconds (1 second)
        var time = setTimeout(tick, 1000);

        // If countdown reaches -1, stop timer and alert the user
        if (seconds == -1) {
            alert("Time's up!");      // Show popup message
            clearTimeout(time);       // Stop setTimeout loop
            timer.innerHTML = "";     // Clear the display
        }
    }

    // Start the countdown
    tick(); 
}
