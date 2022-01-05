chrome.runtime.onMessage.addListener(function (message, sender) {
  if (!message.myPopupIsOpen) return;
  chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
    console.log("execute foreground")
  );
});
