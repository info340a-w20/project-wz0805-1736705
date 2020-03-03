import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';

class Question extends Component {
    render() {
        return (
            <div className="parallax2">
                <div>
                    <div className="drop">
                        <button className="dropbtn">
                            <img id="menu" alt="menu bar" src="https://img.icons8.com/material-rounded/48/000000/menu.png"/>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="drop-content">
                            <Link to="/#homebody">Welcome</Link>
                            <Link to="/Community#homebody">Community</Link>
                            <Link to="/#contact">Contact Us</Link>
                            <Link to="/Login">Login</Link>
                        </div>
                    </div>
                    <div id="popup1" className="overlay">
                        <div className="popup" id="see">
                            <a className="close" href="#">&times;</a>
                            <div className="content2">
                                <div className="container">
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-text3" id="questionText">
                        <div className="container">
                            <div className="row">
                                <div id="webpageTop">
                                    <form action="" method="POST">
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>1. How much time approximately you have for cooking today?</legend>
                                                    <input type="radio" id="30" name="time" value="30"/>
                                                    <label htmlFor="30">&nbsp;Under 30 Minutes</label><br/>
                                                    <input type="radio" id="60" name="time" value="60"/>
                                                    <label htmlFor="60">&nbsp;30 - 60 Minutes</label><br/>
                                                    <input type="radio" id="60+" name="time" value="1000000000000"/>
                                                    <label htmlFor="60+">&nbsp;Over 60 Minutes!</label>
                                                </fieldset>

                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>2. Want something healthy or sweet &amp; relaxing?</legend>
                                                    <input type="radio" id="healthy" name="typeHealthy" value="healthy"/>
                                                    <label htmlFor="healthy">&nbsp;Healthy!</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="dessert" name="typeHealthy" value="dessert"/>
                                                    <label htmlFor="dessert">&nbsp;Sweet &amp; Relaxing!</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>3. Do you have abundant ingredients or have less for preparation?</legend>
                                                    <input type="radio" id="ingremore" name="ingre" value="1000000000000"/>
                                                    <label htmlFor="ingremore">&nbsp;Yes!</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="ingreless" name="ingre" value="7"/>
                                                    <label htmlFor="ingreless">&nbsp;Not a lot..</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>4. Do you like fruity or meaty?</legend>
                                                    <input type="radio" id="fruit" name="typeFruity" value="fruit"/>
                                                    <label htmlFor="fruit">&nbsp;Fruit</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="meat" name="typeFruity" value="meat"/>
                                                    <label htmlFor="meat">&nbsp;Meat</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>5. Do you need somthing comfort food?</legend>
                                                    <input type="radio" id="comfort" name="comfort" value="comfort"/>
                                                    <label htmlFor="comfort">&nbsp;Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="course" name="comfort" value="course"/>
                                                    <label htmlFor="course">&nbsp;No</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <button role="submit" onclick="location.href='community.html';" className="post-button btn btn-warning" id="postPage" >
                                                    Done
                                                </button>
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
                            <li className="current"><Link to="/#homebody">Welcome</Link></li>
                            <li><Link to="/Community#homebody">Community</Link></li>
                            <li><Link to="/#contact">Contact Us</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Question;