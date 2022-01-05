$(function () {
  $("#pageCapture").click(function () {
    chrome.runtime.sendMessage({ myPopupIsOpen: true });
  });
});
