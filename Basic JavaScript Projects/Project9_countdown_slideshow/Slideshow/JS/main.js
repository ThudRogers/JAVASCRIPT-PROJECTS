// Initialize the slide index to 0 (no slide shown yet)
let slideIndex = 0;

// Call the function immediately when the script loads
showSlides();

function showSlides() {
  let i;

  // Get all elements with the class "mySlides" (the slides in the slideshow)
  let slides = document.getElementsByClassName("mySlides");

  // Get all elements with the class "dot" (the navigation dots under the slides)
  let dots = document.getElementsByClassName("dot");

  // Hide all slides by default
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Move to the next slide
  slideIndex++;

  // If we've gone past the last slide, reset back to the first
  if (slideIndex > slides.length) { 
    slideIndex = 1 
  }    

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex-1].style.display = "block";  

  // Add "active" class to the current dot so it highlights
  dots[slideIndex-1].className += " active";

  // Automatically call showSlides again after 2 seconds
  // (creates the loop that makes the slideshow run continuously)
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
