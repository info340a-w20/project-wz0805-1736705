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
                    <button className="button btn btn-warning"  onClick={() =>this.props.handleSort()}>Least Time</button>&nbsp;&nbsp;&nbsp;
                    <button className="button btn btn-warning"  onClick={() =>this.props.handleShow()}>Latest Upload</button>
                </p>
                <div className="box">
                    <Link to="/Post" className="button" id="start">Post Your Own</Link>
                </div>
                <br/>
                <p><Link to="/Community#communitymain">Click Here</Link>&darr; for Recipes</p>
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
                    
                    </div>
                    <div className="row" id="recipeList">
                        <div style={{marginLeft:'auto',marginRight:'auto',textAlign:'center',width:'100%',marginBottom:'50px'}}>
                            <button className="button btn btn-warning" onClick={function(){window.location.reload(); window.scrollTo(0,0)}}>Show all recipes</button>
                        </div>
                        {this.props.data.map(function(d, i) {
                            return <Recipes key={i} data={d} />
                        })}
                        {this.props.data.length === 0 &&
                            <div style={{left:"auto",right:"auto",textAlign:"center",width:"100%"}}><b style={{fontSize: "30px"}}>Your answers do not match any recipes</b>
                            <br/><Link to='/#homebody' style={{fontSize: "20px"}}>Try Again</Link></div>
                        }
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