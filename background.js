var ba = chrome.browserAction,
    textArea = document.createElement('textarea');

document.body.appendChild(textArea);

ba.enable();
ba.setBadgeBackgroundColor({
  color : "#00ff00"
});
ba.onClicked.addListener(
  function(tab) {
    if(tab.url.match(/^http/)) {
      chrome.tabs.sendMessage(tab.id, {
        copy : 1
      }, function(response) {
        textArea.value = response.body;
        textArea.select();
        document.execCommand('copy');
      });
    }
  }
);

