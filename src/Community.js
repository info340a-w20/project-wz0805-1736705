import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Recipes } from "./Recipes";
import Login, {fakeAuth} from "./Login";
import Home from "./Home"
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
                    <Link to="/#homebody">Welcome</Link>
                    <Link>Community</Link>
                    <Link to="/Community#contact">Contact Us</Link>
                    <Link to="/Login">Login</Link>
                    
                </div>
            </div>
            <div className="hero-text1">
            <h1>Communities</h1>
            <p>Share and post in our community!</p>
            <div className="container" id="filter">
                <p>Order By: 
                    <a href="#" className="btn btn-light my-1" id="time">Time</a>
                </p>
                <div className="box">
                    <Link to="/Post" className="button" id="start">Post Your Own</Link>
                </div>
                <br/>
                <p>Scroll Down &darr; for Recipes</p>
            </div>
        </div>
        </div>
        <header id="header" className="alt">
           <h1 id="logo">Mood Recipes</h1>
            <nav id="nav">
                <ul>
                    <li><Link to="/#homebody">Welcome</Link></li>
                    <li className="current"><b>Community</b></li>
                    <li><Link to="/Community#contact">Contact Us</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <div className="album py-5" id="communitymain">
                <div className="container">
                    <div className="row" id="showRecipes">
                        
                    </div>
                    <div className="row" id="recipeList">
                        { this.props.data.map(function(d, i) {
                            return <Recipes key={i} data={d} />
                        }) }
                        
                    </div>
                </div>
            </div>
        </main>

        <div className="parallax" id="bottomp">
            <footer className="index-footer" id="contact">
            <p>This page is a cooperative course work created by Xiying Zhang and Zhan Wu as an initial static version of this web app.</p>
            <address><p>
            Contact us at <a href="mailto:xz67@uw.edu">xz67@uw.edu</a>, or at <a href="mailto:alex.zhan.wu@icloud.com">alex.zhan.wu@icloud.com</a>.
            </p></address>
            <p>&copy; 2020 Zhan Wu and Xiying Zhang.</p>
            </footer>
        </div>
      </>
      );
    }
  }


export default Community;