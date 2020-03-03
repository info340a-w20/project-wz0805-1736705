import React, { Component } from "react";
import {Link, Route, Switch } from "react-router-dom";
import Login, {fakeAuth} from "./Login";
import Home from "./Home"
import * as d3 from "d3";

class Post extends Component {
    render() {
        return(
            <div className="parallax2">
                <div className="hero-image3">
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
                <div className="hero-text3">
                    <h1 className="display-lg">Make your post</h1>
                    <div className="container1">
                        <div className="row">
                            <div>
                                <form action="" method="POST">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="name" className="title-text require">Title <span className="require">*</span></label>
                                            <input id="name" type="text" className="form-control" name="name" placeholder="Name of your recipe"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="description" className="title-text require">Description</label>
                                            <input id="description" className="form-control" name="description" placeholder="Give your recipe a introduction"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="ingredients" className="title-text require">Ingredients <span className="require">*</span></label>
                                            <input id="ingredients" className="form-control" name="ingredients" placeholder="Ingredients of your recipe"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="steps" className="title-text require">Steps</label>
                                            <input id="steps" className="form-control" name="steps" placeholder="How do you make it"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="tags" className="title-text">Tags <span className="require">*</span><small>&nbsp;&nbsp;(Seperate by comma)</small></label>
                                            <i className="fas fa-search" aria-hidden="true"></i>
                                            <input id="tags" className="form-control" type="text" placeholder="Search Tags"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="minutes" className="title-text">Time Needed <span className="require">*</span><small>&nbsp;&nbsp;(Minutes)</small></label>
                                            <input id="minutes" className="form-control" type="number" placeholder="Estimate time"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <Link to="/Community" role="submit" className="post-button btn btn-warning" id="postPage" >
                                                Create</Link>
                                            <Link to="/Community" className="post-button btn btn-light">Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <header id="header" className="alt">
                <h1 id="logo">Mood Recipes</h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/">Welcome</Link></li>
                        <li className="current"><Link to="/Community">Community</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </nav>
            </header>
            </div>
        )
    }
}
export default Post;