chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.insertCSS({
        files: ["styling.css"],
        target: { tabId: tab.id }
    });

    chrome.scripting.executeScript({
        files: ["scripts/content.js"],
        target: { tabId: tab.id }
    });
});
