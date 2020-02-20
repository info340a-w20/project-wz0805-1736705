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
    updateButton();
})
  
// Event (push in data, update page)
$("form").on("submit", function() {
    event.preventDefault();
    var temp = [];
    state.data.map(function(d){
        if((d.minutes < state[time]) && (d.tags.includes(state[typeHealthy]))
         && (d.n_ingredients < state[ingre]) && (d.tags.includes(state[typeFruity]))
         && (d.tags.includes(state[comfort]))){
            temp.push(d);
        }
    })
    window.localStorage.setItem("moodRecipe", JSON.stringify(temp));
}, false);
 
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




