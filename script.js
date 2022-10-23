// Load content upon extension click
document.addEventListener('DOMContentLoaded', () => {

  const output = document.getElementById('output');
  const output2 = document.getElementById('output');
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

    let http_request = 'http://127.0.0.1:5000/query/?url=' + tabs[0].url
    // output.innerHTML = http_request;
    
    fetch(http_request)
      .then(response => {
        return response.json();
      })
      .then(function (jsonResponse) {
        output.innerHTML = jsonResponse.bytes;
        let calculation = (jsonResponse.bytes * 0.00000004242 * 0.00248138957);
        output2.innerHTML = calculation;
      })
      .catch(error => {
        output.innerHTML = "Failed to fetch data!"
      })

  });

});