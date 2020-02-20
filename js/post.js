'use strict';

let state = {};

var stringCurr = window.localStorage.getItem("allRecipe");
var stringArr = stringCurr.substring(1, stringCurr.length - 1).split("},");
for (let i = 0; i < stringArr.length - 1; i++) {
    stringArr[i] += "}";
}
var tempArr = [];
for (let k = 0; k < stringArr.length; k++) {
    tempArr.push(JSON.parse(stringArr[k]));
}
state.data = tempArr;
updatePage();


// Track input state
$("input").on("input", function() {
    let id = $(this).attr("id");
    state[id] = $(this).val();
    updateButton();
})
// Event (push in data, update page)
$("form").on("submit", function() {
    event.preventDefault();
    state.data.push({name:state.name, minutes:state.minutes, tags:state.tags, steps:state.steps, description:state.description, ingredients:state.ingredients});
    window.localStorage.setItem("allRecipe", JSON.stringify(state.data));
    updatePage();
})


// Update page
function updatePage() {
    // Clear values
    $("input").val("");
    state.name = '';
    state.minutes = '';
    state.tags = '';
    state.steps = '';
    state.description = '';
    state.ingredients = '';
    updateButton();
}

// Toggle button class
function updateButton() {
    let disable = state.input == "" | state.name == "" | state.minutes == "" | state.tags == "" | state.ingredients == "" ? true : false;
    $("#postPage").attr("disabled", disable);
}




