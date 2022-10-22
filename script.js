var i = 0;

function calculate() {

    i++;
    // let output = `You clicked ${i} times! `;
    let output = ``;
    let link_input = document.getElementById('input').value;
    output += `<br>`;
    output += `Reading link: `;
    output += link_input;
    output += `...`;
    document.getElementById('output').innerHTML = output;

}

// Execute function upon page load
// window.addEventListener('DOMContentLoaded', myfunc);