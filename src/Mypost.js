import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import UserRecipes from "./UserRecipes";
import firebase from 'firebase';
import Popup from "reactjs-popup";

class Mypost extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data,
                    errorMessage:"",
                    limit: 24};
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
                trigger={<Link>Sign Out</Link>}
                modal
                closeOnDocumentClick>
                    <div>
                        {
                            this.props.user!==undefined
                            ? <p className="loginScreen">Hello, {this.props.user.displayName}</p>
                            : null
                        }
                        {
                            this.props.user!==undefined
                            ? <div className="loginScreen"><Link to="/Community#homebody" className="button btn btn-warning" onClick={()=>this.signOut()}>Sign out</Link></div>
                            : null
                        }
                    </div>
            </Popup>
        )
    }

    signOut = () => {
        firebase.auth().signOut();
    }
    
    updateFirebase(Arr, em) {
        let userId = firebase.auth().currentUser && firebase.auth().currentUser.uid;
        firebase.database().ref('/'+userId).push(Arr[0]);
    }

    render() {
        var keyArr = [];
        return (
        <>
            <div className="hero-image4">
                
                <div className="hero-text1" style={{width:"100%", height:"100%"}}>
                <div className="drop">
                    <button className="dropbtn">
                        <img id="menu" alt="menu bar" src="https://img.icons8.com/material-rounded/48/000000/menu.png"/>
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="drop-content">
                        <Link to="/#homebody">Welcome</Link>
                        <Link to="/Community#homebody">Community</Link>
                        {this.props.user!==undefined ? <Link to="/MyPost#homebody">My Post</Link> : null}
                        <Link to="/Community#contact">Contact Us</Link>
                        {this.loginPopup()}
                        
                    </div>
                </div>
                <div style={{paddingTop:"40vh"}}>
                <h1>My Post</h1>
                <p>See all the recipes you have posted</p>
                <div className="container" id="filter">
                    <p>Order By:&nbsp;&nbsp;&nbsp;
                        <button className="button btn btn-warning"  onClick={() =>this.props.handleSort()}>Least Time</button>&nbsp;&nbsp;&nbsp;
                        <button className="button btn btn-warning"  onClick={() =>this.props.handleShow()}>Latest Upload</button>
                    </p>
                    <div className="box">
                        <br id="space"/>
                        <Link to="/Post" className="button" id="start">Post Your Own</Link>
                    </div>

                    <br id="space"/>
                    <p><Link to="/MyPost#communitymain" >Click Here</Link>&darr; for Recipes</p>
                </div>
                </div>
                </div>
            </div>
            <header id="header" className="alt">
            <h1 id="logo">Mood Recipes</h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/#homebody">Welcome</Link></li>
                        <li><Link to="/Community#homebody">Community</Link></li>
                        {this.props.user!==undefined ? <li className="current"><Link to="/MyPost#homebody">My Post</Link></li> : null}
                        <li><Link to="/Community#contact">Contact Us</Link></li>
                        <li>{this.loginPopup()}</li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="album py-5" id="communitymain">
                    <div className="container">
                        <div className="row" id="recipeList" style={{marginTop: '80px'}}>
                            {
                            // render recipes
                            this.props.currKey.map(function(d) {
                                return keyArr.push(d);
                            })
                            }
                            {
                            this.props.data.slice(0, this.state.limit).map(function(d, i) {
                                return <UserRecipes key={i} data={d} currKey={keyArr[i]} allData={this.props.data}/>
                            }, this)
                            }
                            {this.props.data.length === 0 &&
                                <div style={{left:"auto",right:"auto",textAlign:"center",width:"100%"}}><b style={{fontSize: "30px"}}>You haven't posted any recipes yet</b>
                                <br/><Link to='/Post' style={{fontSize: "20px"}}>Click Here to post your first recipe!</Link></div>
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

export default Mypost;