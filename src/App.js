import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Community from "./Community";
import ContactUs from "./ContactUs";
import Question from "./Question";
import Post from "./Post";
import Login, {fakeAuth} from "./Login";


class App extends Component {
  render() {
    return (
      <div>
        <div className="hero-image">

          <div className="drop">
              <button className="dropbtn">
                  <img id="menu" alt="menu bar" src="https://img.icons8.com/material-rounded/48/000000/menu.png"/>
                  <i className="fa fa-caret-down"></i>
              </button>
              <div className="drop-content">
                  <Link to="/">Welcome</Link>
                  <Link to="/Community">Community</Link>
                  <Link to="/ContactUs">Contact Us</Link>
                  <Link to="/admin">Login</Link>
                  <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Welcome} />
                    <Route path="/Community" component={Community} />
                    <Route path="/ContactUs" component={ContactUs} />
                  </Switch>
              </div>
          </div>
          <div className="hero-text">
            <h1>Some hints for what to cook? </h1>
            <p>Here are several questions can help you decide</p>
            <div className="box">
                <a className="button" href="question.html" id="start">Get Started</a>
            </div>
            <br/>
            <p>Scroll Down &darr; for More Information About Us</p>
          </div>
        </div>

        <header id="header" className="alt">
          <h1 id="logo">Mood Recipes</h1>
          <nav id="nav">
              <ul>
                  <li className="current"><Link to="/">Welcome</Link></li>
                  <li><Link to="/Community">Community</Link></li>
                  <li><Link to="/ContactUs">Contact Us</Link></li>
                  <li><Link to="/admin">Login</Link></li>
              </ul>
          </nav>
        </header>
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Welcome} />
            <Route path="/Community" component={Community} />
            <Route path="/ContactUs" component={ContactUs} />
        </Switch>
    
          
    </div>
    );
  }
}

//Home component
const Welcome = props => (
  <div>
    
  </div>
);

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};


export default App;