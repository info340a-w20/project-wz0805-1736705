import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Community from "./Community";
import Home from "./Home";
import Question from "./Question";
import Post from "./Post";
import * as d3 from "d3";
import data from "./data/file1.csv";

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
            <Community data={this.state.data} handleSort={this.onSort.bind(this)} handleShow={this.onShow.bind(this)}/>
            </Route>
            <Route path="/Question">
              <Question data={this.state.data} onUpdate={this.handleChange.bind(this)} />
            </Route>
            <Route path="/Post">
              <Post data={this.state.data} onUpdate={this.handleChange.bind(this)} />
            </Route>
        </Switch>
  )};

  onSort(){
    let newState = this.state.data.sort((a, b) => (a.minutes - b.minutes));
    this.setState({data:newState});
    console.log(this.state);
  }

  onShow(){
    let newState = this.state.data.sort((a, b) => (a.id - b.id));
    this.setState({data:newState});
    console.log(this.state);
  }


  handleChange = (arr) => {
    var obj = {};
    obj["data"] = arr;
    this.setState(obj);
  }
}

export default App;