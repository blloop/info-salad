// Create structure to store data locally
var data_salad = {

    // JSON to store values to compute
    items: {},

    // Save and load data from browser
    save: () => {
      localStorage.setItem('data_salad', JSON.stringify(data_salad));
    }, 
    load: () => {
        data_salad = localStorage.getItem('data_salad'); 
        if (data_salad == null) {
            data_salad = {};
        } else {
            data_salad = JSON.parse(data_salad);
        }
    },

    init: () => {
        info_salad.load();
        info_salad.list();
    },

    list: () => {}

}

function displayText() {
    alert("You clicked a button!");
}