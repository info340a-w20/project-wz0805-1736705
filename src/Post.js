import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from './LinkButton';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            id: "",
            name: "",
            description: "",
            steps: "",
            ingredients: "",
            minutes: "",
            tags: ""
        };
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    inputChange(event) {
        let obj = {};
        obj[event.target.id] = event.target.value;
        this.setState(obj);
        this.updateButton();
    }

    updateButton() {
        let disable = (this.state.name === "" || this.state.description === "" || this.state.steps === ""
         || this.state.tags === "" || this.state.ingredients === "" || this.state.minutes === "") ? true : false;
        let obj = {};
        obj["disabled"] = disable;
        this.setState(obj);
    }

    submitRecipe(event) {
        event.preventDefault();
        var temp = [];
        this.state.data.map((d) => {
            return temp.push(d);
        })
        var newId = temp.length + 1;
        var arr = [];
        arr.push({id: newId, name: this.state.name, description: this.state.description, ingredients: this.state.ingredients,
            steps: this.state.steps, tags: this.state.tags, minutes: this.state.minutes});
        arr.push(...temp);
        console.log(temp);
        let obj = {};
        obj["data"] = arr;
        console.log(obj);
        this.setState(obj);
    };

    render() {
        console.log(this.state);
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
                                            <input id="name" type="text" className="form-control" name="name" placeholder="Name of your recipe" onInput={this.inputChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="description" className="title-text require">Description</label>
                                            <input id="description" className="form-control" name="description" placeholder="Give your recipe a introduction" onInput={this.inputChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="ingredients" className="title-text require">Ingredients <span className="require">*</span></label>
                                            <input id="ingredients" className="form-control" name="ingredients" placeholder="Ingredients of your recipe" onInput={this.inputChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="steps" className="title-text require">Steps</label>
                                            <input id="steps" className="form-control" name="steps" placeholder="How do you make it" onInput={this.inputChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="tags" className="title-text">Tags <span className="require">*</span><small>&nbsp;&nbsp;(Seperate by comma)</small></label>
                                            <i className="fas fa-search" aria-hidden="true"></i>
                                            <input id="tags" className="form-control" type="text" placeholder="Give Some Tags" onInput={this.inputChange.bind(this)}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="minutes" className="title-text">Time Needed <span className="require">*</span><small>&nbsp;&nbsp;(Minutes)</small></label>
                                            <input id="minutes" className="form-control" type="number" placeholder="Estimate time" onInput={this.inputChange.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <input type="checkbox" id="confirm" name="confirm" onInput={(e)=>{this.inputChange(e);this.submitRecipe(e)}}/>
                                            <label htmlFor="confirm">&nbsp;I agree to the
                                                <a href="https://www.termsfeed.com/terms-conditions/48f76bd8e5f2333f79f1195ca2e325fb/" target="_blank">
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
                                            disabled={!this.state.name || !this.state.ingredients || !this.state.tags || !this.state.minutes || !this.state.confirm}>
                                                Create
                                            </LinkButton>
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
