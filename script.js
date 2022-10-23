// Load content upon extension click
document.addEventListener('DOMContentLoaded', () => {

  const output = document.getElementById('output');
  const output2 = document.getElementById('output2');
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

    let http_request = 'http://127.0.0.1:5000/query/?url=' + tabs[0].url
    // output.innerHTML = http_request;
    
    fetch(http_request)
      .then(response => {
        return response.json();
      })
      .then(function (jsonResponse) {
        let calculation = (jsonResponse.bytes * 0.00000004242);
        output.innerHTML = calculation.toFixed(10);
        let calculation2 = (jsonResponse.bytes * 0.00000000010526055 * 1609.34);
        output2.innerHTML = calculation2.toFixed(10);
      })
      .catch(error => {
        output.innerHTML = "Failed to fetch data!"
        output2.innerHTML = "Failed to fetch data!"
      })

  });

});

const openPopup = document.getElementById("info");

let open = false;

// Outside click to close donate
overlay.addEventListener('click', () => {
  const pop = document.getElementById("popup");
  if (open) {
    close();
    open = false;
  } else {
    open();
    open = true;
  }
});

// Escape key to close
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
      close();
    }
});

// Open popup
function open() {
  document.getElementById('popup').innerHTML = "hello";
};

// Close popup
function close() {
  document.getElementById('popup').innerHTML = "";
};