import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Community from "./Community";
import Home from "./Home";
import Question from "./Question";
import Post from "./Post";
import * as d3 from "d3";
import data from "./file1.csv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  
  componentDidMount() {
    // Load data
    d3.csv(data).then((d) => {
      this.setState({ data: d });
    });
  }
  
  render() {  
    return (
        <Switch>
            <Route exact path='/'>
              <Home data={this.state.data} />
            </Route>
            <Route path='/Community'>
              <Community data={this.state.data} />
            </Route>
            <Route path="/Question">
              <Question data={this.state.data} />
            </Route>
            <Route path="/Post">
              <Post data={this.state.data} />
            </Route>
        </Switch>
  )};
}
  
export default App;