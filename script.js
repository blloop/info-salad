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

  // let http_request = '';
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    let http_request = 'http://127.0.0.1:5000/query/?url=' + tabs[0].url
    output.innerHTML = http_request;
    
    fetch(http_request)
      .then(response => {
        return response.json();
      })
      .then(function (jsonResponse) {
        output.innerHTML = jsonResponse.bytes
      })
      .catch(error => {
        output.innerHTML = error
      })
  });

});