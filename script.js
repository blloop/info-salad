// console.log("Hello");

function testfunc() {
    document.body.innerHTML = "I";
}

const getTabName = (tabTitle) => {
    const retName = `The title of this tab is: ${tabTitle}`
    return retName;
}

document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const query = { 
        active: true, currentWindow: true 
    };

    chrome.tabs.query(query, (tabs) => {
        output.innerHTML = getTabName(tabs[0].title);
    });

    // --------------------------

    // var protocolVersion = '1.0';
    // chrome.debugger.attach({
    //     tabId: tabId
    // }, protocolVersion, function() {
    //     if (chrome.runtime.lastError) {
    //         console.log(chrome.runtime.lastError.message);
    //         return;
    //     }
    //     // Debugger is attached
    //     chrome.debugger.sendCommand({
    //         tabId: tabId
    //     }, "Network.enable", {}, function(response) {
    //         // Possible response: response.id / response.error
    //         // 3. Change the User Agent string!
    //         chrome.debugger.sendCommand({
    //             tabId: tabId
    //         }, "Network.responseReceived", {
    //             userAgent: 'Whatever you want'
    //         }, function(response) {
    //             // Possible response: response.id / response.error
    //             // 4. Now detach the debugger (this restores the UA string).
    //             chrome.debugger.detach({tabId: tabId});
    //         });
    //     });
    // });

    // --------------------------
});

// chrome.devtools.network.onRequestFinished.addListener(request => {
//     document.getElementById("counter").innerHTML += "I";
    
//     request.getContent((body) => {
//         if (request.request && request.request.url) {
//             var bodyObj = JSON.parse(body);
//             console.log(bodyObj);
//             document.getElementById("counter").innerHTML += "I";
//         }
//     });
// });

const resources = {};
page._client.on('Network.dataReceived', (event) => {
  const request = page._networkManager._requestIdToRequest.get(
    event.requestId
  );
  if (request && request.url().startsWith('data:')) {
    return;
  }
  const url = request.url();
  const length = event.dataLength;
  if (url in resources) {
    resources[url] += length;
  } else {
    resources[url] = length;
  }
});

const totalUncompressedBytes = Object.values(resources).reduce((a, n) => a + n, 0);
document.getElementById("counter").innerHTML += totalUncompressedBytes;
