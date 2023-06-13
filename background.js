chrome.runtime.onMessage.addListener(function (message) {
  var url = message.url;
  var type = message.type;
  chrome.downloads.download({ url: url, filename: getFileName(url, type) });
});

function getFileName(url, type) {
  var extension = type === 'image' ? '.jpg' : '.mp4';
  var timestamp = new Date().getTime();
  return 'download_' + timestamp + extension;
}
