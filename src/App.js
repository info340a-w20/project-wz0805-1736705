import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from 'firebase';
import Community from "./Community";
import Home from "./Home";
import Question from "./Question";
import Post from "./Post";
import MyPost from "./Mypost";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: undefined,
            currentData: [],
            currentKey: []
        };
    }

    updateUser(user) {
        this.setState({user: user});
    }

    componentDidMount() {
        this.dataRef = firebase.database().ref();
        this.dataRef.on("value", function(snapshot) {
            var all = [];
            //LOOPING EACH CHILD AND PUSHING TO ARRAY
            snapshot.forEach(item => {
                const temp = item.val();
                if (firebase.auth().currentUser !== null && item.key === firebase.auth().currentUser.uid) {
                    this.setState({currentData: Object.values(temp).reverse()});
                    this.setState({currentKey: Object.keys(temp).reverse()});
                }
                all = [...all, ...Object.values(temp).reverse()];
                return false;
            });
            this.setState({data:all});
        }.bind(this));

        this.authUnRegFunc = firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
              // User is signed in.
              this.setState({user: user});
            } else{
              this.setState({user: undefined});
            }
        });
    }

    componentWillUnmount(){
        this.authUnRegFunc();
    }
    

    onSort(){
        let newState = this.state.data.sort((a, b) => (a.minutes - b.minutes));
        this.setState({data:newState});
    }

    onShow(){
        let newState = this.state.data.sort((a, b) => (b.id - a.id));
        this.setState({data:newState});
    }

    myPostOnSort(){
        let newState = this.state.currentData.sort((a, b) => (a.minutes - b.minutes));
        this.setState({currentData:newState});
    }

    myPostOnShow(){
        let newState = this.state.currentData.sort((a, b) => (b.id - a.id));
        this.setState({currentData:newState});
    }

    handleChange = (arr) => {
        var obj = {};
        obj["data"] = arr;
        this.setState(obj);
    }

   render() {
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
                <Route path="/MyPost">
                    <MyPost data={this.state.currentData} currKey={this.state.currentKey} onUpdate={this.handleChange.bind(this)} handleSort={this.myPostOnSort.bind(this)} handleShow={this.myPostOnShow.bind(this)} updateUser={this.updateUser.bind(this)} user={this.state.user}/>
                </Route>
            </Switch>
    )};
}


export default App;
