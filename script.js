console.log("Hello");

document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        output.innerHTML = getTabName(tabs[0].title);
    });

    // --------------------------

    var protocolVersion = '1.0';
    chrome.debugger.attach({
        tabId: tabId
    }, protocolVersion, function() {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
            return;
        }
        // Debugger is attached
        chrome.debugger.sendCommand({
            tabId: tabId
        }, "Network.enable", {}, function(response) {
            // Possible response: response.id / response.error
            // 3. Change the User Agent string!
            chrome.debugger.sendCommand({
                tabId: tabId
            }, "Network.responseReceived", {
                userAgent: 'Whatever you want'
            }, function(response) {
                // Possible response: response.id / response.error
                // 4. Now detach the debugger (this restores the UA string).
                chrome.debugger.detach({tabId: tabId});
            });
        });
    });

    // --------------------------
});

const getTabName = (tabTitle) => {
    const retName = `The title of this tab is: ${tabTitle}`
    return retName;
}