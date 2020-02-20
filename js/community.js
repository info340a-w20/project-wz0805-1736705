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
    //temp += "<div class='box'><a class='button' href='#popup1'>Let me Pop up</a></div><div id='popup1' class='overlay'><div class='popup'><h2>Here i am</h2><a class='close' href='#'>&times;</a><div class='content'>Thank to pop me out of that button, but now i'm done so you can close this window.</div></div></div></div></div>"
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
      updatePage();
    }
}


//JSON.parse(localStorage.getItem('myMovie')||"[]")
