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