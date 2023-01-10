chrome.tabs.onUpdated.addListener((tabId, changeinfo, tab) => {
  if (~tab.url.indexOf("youtube.com/") && ~tab.url.indexOf("/shorts/")) {
    if (changeinfo.status === "complete") {
      chrome.tabs.goBack(tabId);
      chrome.tabs.update(tabId, { url: tab.url.replace("?", "&").replace("shorts/", "watch?v=") });
    }
  }
});