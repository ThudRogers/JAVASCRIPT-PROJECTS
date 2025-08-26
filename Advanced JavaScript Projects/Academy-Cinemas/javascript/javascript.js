// Initialize Bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover',
        title: element.getAttribute('data-bs-title') || '',
        placement: 'top'
    });
});

// Function to display toast with selected movie options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[
        document.getElementById('movieSelect').selectedIndex
    ].text;

    var time = document.getElementById('timeSelect').options[
        document.getElementById('timeSelect').selectedIndex
    ].text;

    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie +
        "\nTime: " + time +
        "\nTickets: " + quantity;

    // Update the toast content
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;

    // Show the toast
    var toastElement = document.getElementById('toastDisplay');
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
}

// Button click triggers this
function buyTickets() {
    displaySelectedMovieOptions();
}

// Show and hide callout on hover
document.addEventListener("DOMContentLoaded", function () {
    const poster = document.querySelector('#ben-hur img');
    const callout = document.getElementById('benHurCallout');

    poster.addEventListener('mouseenter', (e) => {
        const rect = poster.getBoundingClientRect();
        callout.style.top = `${rect.bottom + window.scrollY + 10}px`;
        callout.style.left = `${rect.left + window.scrollX}px`;
        callout.style.display = 'block';
    });

    poster.addEventListener('mouseleave', () => {
        callout.style.display = 'none';
    });
});
//JQUERY

//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 50px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirement has been met add the
        //nav-shrink class selector to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu
        //to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or
        //is back at the top the nav-shrink class selector
        //is removed from the HTML element with the nav
        //class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now
        //returned to its original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    // On click when an element contains just the nav-link class and not the dropdown-toggle and then
    // also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
        // Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});

