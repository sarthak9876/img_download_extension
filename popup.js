document.addEventListener('DOMContentLoaded', function () {
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function () {
    var imageUrlInput = document.getElementById('imageUrlInput');
    var imageUrl = imageUrlInput.value;
    chrome.runtime.sendMessage({ imageUrl: imageUrl });
  });
});
