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
    renderList();
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
    temp += "<div class='box'>" + 
    "<a class='button' href=" + "'#popup" + item.name +"'>More Details...</a></div>";
    temp += "</p><div class='d-flex justify-content-between'><span class='type-span'>";
    let tag = item.tags;
    let tagArr = tag.split(",");
    tagNum = tagArr.length;
    item.n_tags = tagNum;
    if(tagArr.length > 3) {
        for (let k = 3; k < tagArr.length; k+= 3) {
            temp += "<mark>" + tagArr[k] + "</mark>  ";
        } 
    } else {
        for (let k = 0; k < tagArr.length; k+= 3) {
            temp += "<mark>" + tagArr[k] + "</mark>  ";
        } 
    }
    let ingre = item.ingredients;
    let ingreArr = ingre.split(",")
    ingreNum = ingreArr.length;
    item.n_ingredients = ingreNum;
    temp += "</span></div></div><div class='card-footer text-right text-muted'><p><small>" + ingreArr.length + 
    " ingredients</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>"
    + item.minutes + " minutes</small></p></div>";
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
        renderItem(d, $('#recipeList'));
        renderPop(d, $('#recipeList'))
    })
}
function renderPop(item, parent) {
    var html = "<div id='popup" + item.name + "' class='overlay'><div class='popup' id='see'><h2>" + item.name.toUpperCase() + " (" + item.minutes + " mins)</h2><a class='close' href='#'>&times;</a>" +
        "<div class='content'>" + item.description + "<h3>Required Ingredients:</h3><p>" + item.ingredients + "</p><h3>Steps:</h3><p>" + item.steps + "</p></div></div></div>";
    parent.append(html);
}

//add time filter
document.getElementById('time').addEventListener('click', function() {    
    state.data = state.data.sort((a, b) => b.minutes - a.minutes);
    $("#recipeList").empty();
    state.data.map(function(d){
        renderItem(d, $('#recipeList'))
    })
}, false);

//add ingredient filter
document.getElementById('ingre').addEventListener('click', function() {   
    state.data = state.data.sort((a, b) => b.n_ingredients - a.n_ingredients);
    $("#recipeList").empty();
    state.data.map(function(d){
        renderItem(d, $('#recipeList'))
    })
}, false);

//add tag filter
document.getElementById('tag').addEventListener('click', function() {   
    state.data = state.data.sort((a, b) => b.n_tags - a.n_tags);
    $("#recipeList").empty();
    state.data.map(function(d){
        renderItem(d, $('#recipeList'))
    })
}, false);

function removeRecipe(title){
    var i=state.data.findIndex(dish=>dish.name==title);
    if(i!==-1){
      state.data.splice(i,1);
      localStorage.setItem('allRecipe', JSON.stringify(state.data));
      renderList();
    }
}


//JSON.parse(localStorage.getItem('myMovie')||"[]")
