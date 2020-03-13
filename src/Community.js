import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Recipes from "./Recipes";
import * as firebase from 'firebase/app';
import Popup from "reactjs-popup";

class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data,
                    errorMessage:"",
                    limit:24};
        this.onLoadMore = this.onLoadMore.bind(this);
    }
    onLoadMore() {
        this.setState({
            limit: this.state.limit + 24
        })
    }

    loginPopup(){
        return(
            <Popup
                trigger={this.props.user!==undefined
                    ? <Link>Sign Out</Link>
                    : <Link>Sign In</Link>}
                modal
                closeOnDocumentClick>
                    <div>
                    {
                        this.props.user!==undefined
                        ? <p style={{color:"black"}}>Hello, {this.props.user.displayName}</p>
                        : <p style={{color:"black"}}>Please sign in.</p>
                    }
   
                    {
                        this.props.user!==undefined
                        ? <button onClick={()=>this.signOut()}>Sign out</button>
                        : <button onClick={()=>this.signIn()}>Sign in with Google</button>
                    }
                    </div>
            </Popup>
        )
    }
 
    signIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
            this.props.updateUser(user);
        }).catch((error)=> {
            var errorMessage = error.message;
            this.setState({errorMessage:errorMessage})
        });
    }

    signOut = () => {
        firebase.auth().signOut();
    }
    

    render() {
        console.log(this.props.user);
        return (
        <>
            <div className="hero-image1">
                
                <div className="hero-text1" style={{width:"100%", height:"100%"}}>
                <div className="drop">
                    <button className="dropbtn">
                        <img id="menu" alt="menu bar" src="https://img.icons8.com/material-rounded/48/000000/menu.png"/>
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="drop-content">
                        <Link to="/#homebody">Welcome</Link>
                        <Link to="/Community#homebody">Community</Link>
                        {this.props.user!==undefined ? <Link>My Post</Link> : null}
                        <Link to="/Community#contact">Contact Us</Link>
                        {this.loginPopup()}
                        
                    </div>
                </div>
                <div style={{paddingTop:"40vh"}}>
                <h1>Communities</h1>
                <p>Share and post in our community!</p>
                <div className="container" id="filter">
                    <p>Order By:&nbsp;&nbsp;&nbsp;
                        <button className="button btn btn-warning"  onClick={() =>this.props.handleSort()}>Least Time</button>&nbsp;&nbsp;&nbsp;
                        <button className="button btn btn-warning"  onClick={() =>this.props.handleShow()}>Latest Upload</button>
                    </p>
                    <div className="box">
                        <br id="space"/>
                        {this.props.user!==undefined ? <Link to="/Post" className="button" id="start">Post Your Own</Link> :
                            <Popup
                            trigger={<Link className="button" id="start" style={{top: 0}}>Post Your Own</Link>}
                            modal
                            closeOnDocumentClick>
                                <div>
                                <p style={{color:"black"}}>Please sign in.</p>
                                {
                                    this.props.user!==undefined
                                    ? <button onClick={()=>this.signOut()}>Sign out</button>
                                    : <button onClick={()=>this.signIn()}>Sign in with Google</button>
                                }
                                </div>
                        </Popup>} 
                    </div>
                    <br id="space"/>
                    <p><Link to="/Community#communitymain" >Click Here</Link>&darr; for Recipes</p>
                </div>
                </div>
                </div>
            </div>
            <header id="header" className="alt">
            <h1 id="logo">Mood Recipes</h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/#homebody">Welcome</Link></li>
                        <li className="current"><Link to="/Community#homebody">Community</Link></li>
                        {this.props.user!==undefined ? <li><Link>My Post</Link></li> : null}
                        <li><Link to="/Community#contact">Contact Us</Link></li>
                        <li>{this.loginPopup()}</li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="album py-5" id="communitymain">
                    <div className="container">
                        <div className="row" id="showRecipes">
                        
                        </div>
                        <div className="row" id="recipeList">
                            <div style={{marginLeft:'auto',marginRight:'auto',textAlign:'center',width:'100%',marginBottom:'50px'}}>
                                <button className="button btn btn-warning" onClick={function(){window.location.reload(); window.scrollTo(0,0)}}>Show all recipes</button>
                            </div>
                            {
                            // render all the recipes
                            this.props.data.slice(0, this.state.limit).map(function(d, i) {
                                return <Recipes key={i} data={d} />
                            })
                            }
                            {this.props.data.length === 0 &&
                                <div style={{left:"auto",right:"auto",textAlign:"center",width:"100%"}}><b style={{fontSize: "30px"}}>Your answers do not match any recipes</b>
                                <br/><Link to='/#homebody' style={{fontSize: "20px"}}>Try Again</Link></div>
                            }
                            {this.props.data.length>this.state.limit &&
                            <button className="button btn btn-warning" onClick={this.onLoadMore} style={{marginLeft:"auto", marginRight:"auto"}}>Load More</button>}
                        </div>
                    </div>
                </div>
            </main>
            <div className="parallax" id="bottomp">
                <footer className="index-footer" id="contact">
                <p>This page is a cooperative course work created by Xiying Zhang and Zhan Wu as an initial static version of this web app.</p>
                <address><p>
                Contact us at <a href="mailto:xz67@uw.edu">xz67@uw.edu</a>, or at <a href="mailto:alex.zhan.wu@icloud.com">alex.zhan.wu@icloud.com</a>.
                </p></address>
                <p>&copy; 2020 Zhan Wu and Xiying Zhang.</p>
                </footer>
            </div>
      </>
      );
    }
    
}

export default Community;