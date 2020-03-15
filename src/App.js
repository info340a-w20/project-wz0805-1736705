import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from 'firebase';
import Community from "./Community";
import Home from "./Home";
import Question from "./Question";
import Post from "./Post";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: undefined
        };
    }

    updateUser(user) {
        this.setState({user: user});
    }

    componentDidMount() {
        
        // Load data
        this.dataRef = firebase.database().ref();
        //console.log(this.dataRef);
        this.dataRef.on('value', (snapshot) => {
            var tempArr = [];
            Object.values(snapshot.val()).map(function(d) {
                tempArr.unshift(d);
            })
            this.setState({data: tempArr});
        })
        console.log(this.state);
        this.authUnRegFunc = firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
              // User is signed in.
              this.setState({user:user});
            } else{
              this.setState({user:undefined});
            }
        });
    }

    componentWillUnmount(){
        this.authUnRegFunc();
    }
    

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

   render() {
        console.log(this.state.user);
        return (
            <Switch>
                <Route exact path='/'>
                    <Home data={this.state.data} updateUser={this.updateUser.bind(this)} user={this.state.user}/>
                </Route>
                <Route path='/Community'>
                    <Community data={this.state.data} handleSort={this.onSort.bind(this)} handleShow={this.onShow.bind(this)} updateUser={this.updateUser.bind(this)} user={this.state.user}/>
                </Route>
                <Route path="/Question">
                    <Question data={this.state.data} onUpdate={this.handleChange.bind(this)} updateUser={this.updateUser.bind(this)} user={this.state.user}/>
                </Route>
                <Route path="/Post">
                    <Post data={this.state.data} onUpdate={this.handleChange.bind(this)} updateUser={this.updateUser.bind(this)} user={this.state.user}/>
                </Route>
            </Switch>
    )};
}


export default App;
