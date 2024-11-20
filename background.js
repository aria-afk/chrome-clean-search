chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    // ignore all events that are not url changes
    if (!changeInfo?.url) { return; }
    // verify its a google search and is not already disenshittified 
    if (changeInfo.url.match('https:\/\/.*.google.com\/search') && !changeInfo.url.includes("&udm=14")) {
        // add the disenshittification code to the url :)
        chrome.tabs.update(tabId, {
            url: changeInfo.url + "&udm=14"
        });
    }
});
