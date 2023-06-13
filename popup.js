document.addEventListener('DOMContentLoaded', function () {
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function () {
    var urlInput = document.getElementById('urlInput');
    var typeSelect = document.getElementById('typeSelect');
    var url = urlInput.value;
    var type = typeSelect.value;
    chrome.runtime.sendMessage({ url: url, type: type });
  });
});
