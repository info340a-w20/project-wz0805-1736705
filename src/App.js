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

    componentDidMount() {/*
        const ref = firebase.database().ref();
        ref.once("value")
        .then(function(snapshot) {
            var all = [];
            var categories = [];
            //LOOPING EACH CHILD AND PUSHING TO ARRAY
            snapshot.forEach(item => {
                const temp = item.val();
                console.log(Object.values(temp));
                categories = [...categories, ...Object.values(temp)];
                return false;
            });
            console.log(categories);
            this.setState({data:categories});
        }.bind(this)); */
        
        this.dataRef = firebase.database().ref();
        this.dataRef.on("value", function(snapshot) {
            var all = [];
            //LOOPING EACH CHILD AND PUSHING TO ARRAY
            snapshot.forEach(item => {
                const temp = item.val();
                all = [...all, ...Object.values(temp).reverse()];
                return false;
            });
            console.log(all);
            this.setState({data:all});
        }.bind(this));

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
        let newState = this.state.data.sort((a, b) => (b.id - a.id));
        this.setState({data:newState});
        console.log(this.state);
    }


    handleChange = (arr) => {
        var obj = {};
        obj["data"] = arr;
        this.setState(obj);
    }

   render() {
        console.log(this.state.data);
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
