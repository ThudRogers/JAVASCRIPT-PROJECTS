function getTranslations() {
  // Example input text
  const textToTranslate = "Mastering code you are!";

  // Encode the text for URL
  const url = "https://api.funtranslations.com/translate/yoda.json?text=" + encodeURIComponent(textToTranslate);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // The translated text lives at data.contents.translated
      document.getElementById('translateDisplay').textContent = data.contents.translated;
    })
    .catch(error => {
      document.getElementById('translateDisplay').textContent = "Error fetching translation.";
      console.error(error);
    });
}