//Recipe pop up modal section

//sets up the button that will open the modal 
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe 
var modals = document.querySelectorAll(".recipe-modal");

//Get the span element that closes the modal 
var closeBtn = document.getElementsByClassName("close-btn");

//When the user clicks the recipe button open the modal 
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

//when the user clicks on span x close the modal

for (var i = 0; i < btns.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//Email validation 
document.getElementById('contactForm').addEventListener('submit',
    function (event) {

        //Overrides the default browser referesh when submit is pressed
        event.preventDefault();
        //variables to validate each field is filled out 
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //Email pattern checks for all symbols that would be needed 
        //for an email address such as the @ and . and the text 
        //That would come before, between and after 

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        //use this variable to display messags if fields are filled out or thank you
        const valMsg = document.getElementById('validateMsg');
        if (!firstName || !lastName || !phone || !message) {
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
        } else if (!emailPattern.test(email)) {
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
        } else {
            valMsg.innerHTML = '<p style="color: green;">Thank you for submitting</p>';
        }
        if (msgTimeout) clearTimeout(msgTimeout);
        msgTimeout = setTimeout(() => { valMsg.innerHTML = ''; }, 5000);

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        //Displays what the user wront in the console 
        console.log(JSON.stringify(formData))
    }
)

