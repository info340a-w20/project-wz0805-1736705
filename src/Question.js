import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import LinkButton from './LinkButton';
import firebase from 'firebase';
import Popup from "reactjs-popup";


class Question extends Component {

    // construct the state with data and input fields
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            time: "",
            typeHealthy: "",
            ingre: "",
            typeFruity: "",
            comfort: "",
            errorMessage:""
        }
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    loginPopup(){
        return(
            <Popup
                trigger={<Link>Sign Out</Link>}
                modal
                closeOnDocumentClick>
                    <div>
                        {
                            this.props.user!==undefined
                            ? <p className="loginScreen">Hello, {this.props.user.displayName}</p>
                            : null
                        }
                        {
                            this.props.user!==undefined
                            ? <div className="loginScreen"><Link to="/#homebody" className="button btn btn-warning" onClick={()=>this.signOut()}>Sign out</Link></div>
                            : null
                        }
                    </div>
            </Popup>
        )
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    // change state with new input value
    inputChange(event) {
        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
        this.updateButton();
    }

    // disable state change to disable button
    updateButton() {
        let disable = (this.state.time === "" || this.state.typeHealthy === "" || this.state.ingre === ""
         || this.state.typeFruity === "" || this.state.comfort === "") ? true : false;
        let obj = {};
        obj["disabled"] = disable;
        this.setState(obj);
    }

    // submit recipe and update the state with sorted recipes
    submitRecipe(event) {
        event.preventDefault();
        var temp = [];
        this.state.data.map((d) => {
            if ((parseInt(d.minutes, 10) < parseInt(this.state.time,10)) && (d.tags.includes(this.state.typeHealthy)) &&
            (parseInt(d.n_ingredients, 10) < parseInt(this.state.ingre, 10)) && (d.tags.includes(this.state.typeFruity)) &&
            (d.tags.includes(this.state.comfort))) {
                return temp.push(d);
            }
            return temp;
        })
        let obj = {};
        obj["data"] = temp;
        this.setState(obj);
    };

    
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
                            {this.props.user!==undefined ? <Link to="/MyPost#homebody">My Post</Link> : null}
                            <Link to="/#contact">Contact Us</Link>
                            {this.loginPopup()}
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
                                                    <input type="radio" id="30" name="time" value="30" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="30">&nbsp;Under 30 Minutes</label><br/>
                                                    <input type="radio" id="60" name="time" value="60" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="60">&nbsp;30 - 60 Minutes</label><br/>
                                                    <input type="radio" id="60+" name="time" value="1000000000000" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="60+">&nbsp;Over 60 Minutes!</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>2. Want something healthy or sweet &amp; relaxing?</legend>
                                                    <input type="radio" id="healthy" name="typeHealthy" value="healthy" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="healthy">&nbsp;Healthy!</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="dessert" name="typeHealthy" value="dessert" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="dessert">&nbsp;Sweet &amp; Relaxing!</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>3. Do you have abundant ingredients or have less for preparation?</legend>
                                                    <input type="radio" id="ingremore" name="ingre" value="1000000000000" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="ingremore">&nbsp;Yes!</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="ingreless" name="ingre" value="7" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="ingreless">&nbsp;Not a lot..</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>4. Do you like fruity or meaty?</legend>
                                                    <input type="radio" id="fruit" name="typeFruity" value="fruit" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="fruit">&nbsp;Fruit</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="meat" name="typeFruity" value="meat" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="meat">&nbsp;Meat</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <fieldset>
                                                    <legend>5. Do you need something comfort food?</legend>
                                                    <input type="radio" id="comfort" name="comfort" value="comfort" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="comfort">&nbsp;Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <input type="radio" id="course" name="comfort" value="course" onInput={this.inputChange.bind(this)}/>
                                                    <label htmlFor="course">&nbsp;No</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <input type="checkbox" id="confirm" name="confirm" onInput={(e)=>{this.inputChange(e);this.submitRecipe(e)}}/>
                                                <label htmlFor="confirm">&nbsp;I agree to the
                                                    <a href="https://www.termsfeed.com/terms-conditions/48f76bd8e5f2333f79f1195ca2e325fb/" target="_blank" rel="noopener noreferrer">
                                                    &nbsp;Terms and Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                            <LinkButton
                                            to="/Community#homebody"
                                            className="post-button btn btn-warning"
                                            onClick={(event)=>this.props.onUpdate(this.state.data)}
                                            disabled={!this.state.time || !this.state.ingre || !this.state.confirm}>
                                                Done
                                            </LinkButton>
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
                            {this.props.user!==undefined ? <li><Link to="/MyPost#homebody">My Post</Link></li> : null}
                            <li><Link to="/Community#contact">Contact Us</Link></li>
                            <li>{this.loginPopup()}</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}


export default Question;
