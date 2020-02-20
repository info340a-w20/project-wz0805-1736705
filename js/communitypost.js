'use strict';

let state = {};
var tagNum = 0;
var ingreNum = 0;
// Load data
d3.csv("data/file1.csv").then(function(data) {
    state.data = data;
    if(window.localStorage.getItem("allRecipe") == null) {
        window.localStorage.setItem("allRecipe", JSON.stringify(state.data));
    }
    updatePage();
});




// Function to render an item
function renderItem(item, parent) {
    var html = "<div class='col-sm-12 col-md-6 col-lg-4'><div class='card mb-4 box-shadow'><div class='card-body'>";
    var temp = html;
    temp += "<h2 class = 'card-title'>" + item.name + "</h2><p class='card-text'>";
    let intro = item.description.substring(0,100);
    if (intro != "" && intro.length == 100) {
        temp += intro + "...";
    } else if (intro != "") {
        temp += intro;
    }
    temp += "</p><div class='d-flex justify-content-between'><span class='type-span'>";
    let tag = item.tags;
    let tagArr = tag.split(",");
    tagNum = tagArr.length;
    for (let k = 7; k < tagArr.length; k+= 3) {
        temp += "<mark>" + tagArr[k] + "</mark>  ";
    }
    let ingre = item.ingredients;
    let ingreArr = ingre.split(",")
    ingreNum = ingreArr.length;
    temp += "</span></div></div><div class='card-footer text-right text-muted'><p><small>" + ingreArr.length + 
    " ingredients</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>"
    + item.minutes + " minutes</small></p></div></div></div>";
    parent.prepend(temp);
    temp = html;

}
// Function to render list of items
function renderList() {
    $("#recipeList").empty();
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
    state.data.map(function(d){
        renderItem(d, $('#recipeList'))
    })
}
// Track input state
$("input").on("input", function() {
    let id = $(this).attr("id");
    state[id] = $(this).val();
    updateButton();
})
// Event (push in data, update page)
$("form").on("submit", function() {
    event.preventDefault();
    state.data.push({name:state.name, minutes:state.minutes, tags:state.tags, steps:state.steps, description:state.description, ingredients:state.ingredients, n_ingredients: ingreNum, n_tags: tagNum});
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
    state.n_tags = '';
    renderList();
    updateButton();
}

// Toggle button class
function updateButton() {
    let disable = state.input == "" | state.name == "" | state.minutes == "" | state.tags == "" | state.ingredients == "" ? true : false;
    $("#postPage").attr("disabled", disable);
}




//JSON.parse(localStorage.getItem('myMovie')||"[]")