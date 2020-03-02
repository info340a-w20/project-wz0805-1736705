import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Community from "./Community";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Question from "./Question";
import Post from "./Post";
import Login, {fakeAuth} from "./Login";

const App = () => {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/Community' component={Community}></Route>
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Login" component={Login} />
      </Switch>
    );
  }
  
  export default App;