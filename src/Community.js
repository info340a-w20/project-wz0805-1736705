import React, { Component } from "react";
import {Link, Route, Switch } from "react-router-dom";
import ContactUs from "./ContactUs";
import Login, {fakeAuth} from "./Login";
import Home from "./Home"
import $ from "jquery";
import * as d3 from "d3";


class Community extends Component {
    render() {
      return (
        <>
          <div className="hero-image1">
            <div className="drop">
                <button className="dropbtn">
                    <img id="menu" alt="menu bar" src="https://img.icons8.com/material-rounded/48/000000/menu.png"/>
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="drop-content">
                    <Link to="/">Welcome</Link>
                    <Link to="/Community">Community</Link>
                    <Link to="/ContactUs">Contact Us</Link>
                    <Link to="/Login">Login</Link>
                    
                </div>
            </div>
            <div class="hero-text1">
            <h1>Communities</h1>
            <p>Share and post in our community!</p>
            <div class="container" id="filter">
                <p>Order By: 
                    <a href="#" class="btn btn-light my-1" id="time">Time</a>
                </p>
                <p>
                    <div class="box">
                        <a class="button" href="post.html" id="start">Post Your Own</a>
                    </div>
                </p>
                <br/>
                <p>Scroll Down &darr; for Recipes</p>
            </div>
        </div>
          </div>
          <header id="header" className="alt">
            <h1 id="logo">Mood Recipes</h1>
            <nav id="nav">
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li className="current"><Link to="/">Community</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
          </header>
      </>
      );
    }
  }


  let state = {};
  var tagNum = 0;
  var ingreNum = 0;
  
  // Load data
  d3.csv("data/file1.csv").then(function(data) {
      state.data = data;
      if (window.localStorage.getItem("allRecipe") == null) {
          window.localStorage.setItem("allRecipe", JSON.stringify(state.data));
      }
      if (window.localStorage.getItem("moodRecipe") == null) {
          renderList("allRecipe");
      } else if (window.localStorage.getItem("moodRecipe").length < 3) {
          $("#showRecipes").append("<div style='margin-left:auto;margin-right:auto;" +
          "text-align:center;width:100%;margin-bottom:50px;'><button onclick='showAll()'>Show " + 
          "all recipes</button></div><div style='margin-left:auto;margin-right:auto;text-align:center;width:50%'>" + 
          "<b style='font-size: 30px;'>Your answers do not match any recipes</b><br>" + 
          "<a href='index.html' style='font-size: 20px;'>Try Again</a></div>");
      } else {
          $("#showRecipes").prepend("<div style='margin-left:auto;margin-right:auto;" +
          "text-align:center;width:100%;margin-bottom:50px;'><button onclick='showAll()'>Show " + 
          "all recipes</button></div>");
          renderList("moodRecipe");
      }
  });
  function showAll() {
      window.localStorage.removeItem("moodRecipe");
      $("#showRecipes").html("");
      renderList("allRecipe");
  }
  
  // Function to render an item
  function renderItem(item, parent) {
      var html = "<div class='col-sm-12 col-md-6 col-lg-4'><div class='card mb-4 box-shadow'><div class='card-body'>";
      var temp = html;
      temp += "<h2 class = 'card-title'>" + "<a class='button' href='#popup" + item.name +"'>" + item.name + "</a></h2><p class='card-text'>";
      let intro = "<a class='button' href='#popup" + item.name +"'>";
      if (item.description == "") {
          intro += "( No Description )";
      } else {
          intro += item.description.substring(0,100);
      }
      if (intro != "" && intro.length == 100) {
          temp += intro + "...";
      } else if (intro != "") {
          temp += intro;
      }
      temp += "</a>";
      temp += "</p><div class='d-flex justify-content-between'><span class='type-span'>";
      let tag = item.tags;
      let tagArr = tag.split(",");
      tagNum = tagArr.length;
      item.numTags = tagNum;
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
      item.numIngredients = ingreNum;
      if (parseInt(item.minutes) > 999) {
          item.minutes = 999;
      }
      temp += "</span></div></div><div class='card-footer text-right text-muted'><p><small>" + ingreArr.length + 
      " ingredients</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>"
      + item.minutes + " minutes</small></p></div>";
      parent.prepend(temp);
      temp = html;
  
  }
  // Function to render list of items
  function renderList(storage) {
      $("#recipeList").empty();
      var stringCurr = window.localStorage.getItem(storage);
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
          renderPop(d, $('#recipeList'));
      })
  }
  function renderPop(item, parent) {
      var html = "<div id='popup" + item.name + "' class='overlay'><div class='popup' id='see'><h2>" + item.name.toUpperCase() + 
      " (" + item.minutes + " mins)</h2><a class='close' href='#'>&times;</a>" + "<div class='content'>" + item.description + 
      "<h3>Required Ingredients:</h3><p>" + item.ingredients + "</p><h3>Steps:</h3><p>" + item.steps + "</p></div></div></div>";
      parent.append(html);
  }
  
  //add time filter
  document.getElementById('time').addEventListener('click', function() {    
      state.data = state.data.sort((a, b) => b.minutes - a.minutes);
      $("#recipeList").empty();
      state.data.map(function(d){
          renderItem(d, $('#recipeList'));
          renderPop(d, $('#recipeList'));
      })
  }, false);


export default Community;