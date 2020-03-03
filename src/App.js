import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Community from "./Community";
import Home from "./Home";
import datas from "./file1.csv";
import Question from "./Question";
import Post from "./Post";
import Login, {fakeAuth} from "./Login";
import * as d3 from "d3";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
        data: []
    };
  }
  componentDidMount() {
     //Load data
     d3.csv(datas).then((d)=>{
      this.setState({ data: d });
    });
  }
  render() {
    console.log(this.state);
    return (
      
      <Switch>
        <Route exact path='/' >
          <Home data={this.state.data}/>
        </Route>
        <Route path='/Community'>
          <Community data={this.state.data}/>
        </Route>
        <Route path="/Post" >
          <Post data={this.state.data}/>
        </Route>
      </Switch>
    );
  }
}
  
export default App;