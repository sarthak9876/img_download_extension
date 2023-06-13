chrome.runtime.onMessage.addListener(function (message) {
  var imageUrl = message.imageUrl;
  chrome.downloads.download({ url: imageUrl });
});
