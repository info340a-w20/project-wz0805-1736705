'use strict';

let state = {};

d3.csv("data/file1.csv").then(function(data) {
    state.data = data;
    if(window.localStorage.getItem("allRecipe") == null) {
        window.localStorage.setItem("allRecipe", JSON.stringify(state.data));
    }
});

// Track input state
$("input").on("input", function() {
    let id = $(this).attr("name");
    state[id] = $(this).val();
    console.log(state);
    updateButton();
})
  
// Event (push in data, update page)
$("form").on("submit", function() {
    event.preventDefault();
    var temp = [];
    state.data.map(function(d){
        if ((parseInt(d.minutes, 10) < parseInt(state.time,10)) && (d.tags.includes(state.typeHealthy)) && 
        (parseInt(d.n_ingredients, 10) < parseInt(state.ingre, 10)) && (d.tags.includes(state.typeFruity)) && 
        (d.tags.includes(state.comfort))) {
            console.log(d);
            temp.push(d);
        }
    })
    window.localStorage.setItem("moodRecipe", JSON.stringify(temp));
    updatePage();
});
 
// Update page
function updatePage() {
    // Clear values
    $("input").val("");
    state.time = '';
    state.typeHealthy = '';
    state.n_ingredients = '';
    state.typeFruity = '';
    state.comfort = '';
    updateButton();
}

// Toggle button class
function updateButton() {
    let disable = state.input == "" | state.time == "" | state.typeHealthy == "" | state.n_ingredients == ""
     | state.typeFruity == "" | state.comfort == "" ? true : false;
    $("#postPage").attr("disabled", disable);
}




