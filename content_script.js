chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({
      body : document.body.outerHTML
    });
  }
);



