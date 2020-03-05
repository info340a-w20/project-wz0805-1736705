import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Recipes from "./Recipes";
import Scrollchor from 'react-scrollchor';

class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data};
    }

    render() {
        console.log(this.state);

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
                    <Link to="/Community#homebody">Community</Link>
                    <Link to="/Community#contact">Contact Us</Link>
                    <Link to="/Login">Login</Link>
                    
                </div>
            </div>
            <div className="hero-text1">
            <h1>Communities</h1>
            <p>Share and post in our community!</p>
            <div className="container" id="filter">
                <p>Order By:&nbsp;&nbsp;&nbsp;
                    <button className="button btn btn-warning"  onClick={() =>this.props.handleSort()}>Time</button>
                </p>
                <div className="box">
                    <Link to="/Post" className="button" id="start">Post Your Own</Link>
                </div>
                <br/>
                <p><Scrollchor to="#communitymain">Click Here</Scrollchor> for Recipes</p>
            </div>
        </div>
        </div>
        <header id="header" className="alt">
           <h1 id="logo">Mood Recipes</h1>
            <nav id="nav">
                <ul>
                    <li><Link to="/#homebody">Welcome</Link></li>
                    <li className="current"><Link to="/Community#homebody">Community</Link></li>
                    <li><Link to="/Community#contact">Contact Us</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <div className="album py-5" id="communitymain">
                <div className="container">
                    <div className="row" id="showRecipes">
                    <div style={{marginLeft:'auto', marginRight:'auto',textAlign:'center',width:'100%',marginBottom:'50px'}}>
                        <Link to="/Community"  className="btn btn-warning" onClick={() =>this.props.handleShow()}> Show all recipes</Link></div>
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