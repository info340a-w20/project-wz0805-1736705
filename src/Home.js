import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import * as firebase from 'firebase/app';
import Popup from "reactjs-popup";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {errorMessage:""};
    }
    loginPopup(){
        return(
            <Popup
                trigger={<Link>Login</Link>}
                modal
                closeOnDocumentClick>
                    <div>
                    {
                        this.props.user!==undefined
                        ? <p>Hello, {this.props.user.displayName}</p>
                        : <p>Please sign in.</p>
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
        
        return (
            <>
                <div className="hero-image">
                    
                    <div className="hero-text" style={{width:"100%", height:"100%"}}>
                        <div className="drop">
                            <button className="dropbtn">
                                <img id="menu" alt="menu bar" src="https://img.icons8.com/material-rounded/48/000000/menu.png"/>
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="drop-content">
                                <Link to="/#homebody">Welcome</Link>
                                <Link to="/Community#homebody">Community</Link>
                                <Link to="/ContactUs#homebody">Contact Us</Link>
                                {this.loginPopup()}
                            </div>
                        </div>
                        <div style={{paddingTop:"45vh"}}>
                        <h1>Some hints for what to cook? </h1>
                        <p>Here are several questions can help you decide</p>
                        <div className="box">
                            <Link className="button" to="/Question" id="start">Get Started</Link>
                        </div>
                        <br/>
                        <p><Scrollchor to="#main">Click Here</Scrollchor>&darr; for More Information About Us</p>
                        </div>
                    </div>
                </div>
                <header id="header" className="alt">
                    <h1 id="logo">Mood Recipes</h1>
                    <nav id="nav">
                        <ul>
                            <li className="current"><Link to="/#homebody">Welcome</Link></li>
                            <li><Link to="/Community#homebody">Community</Link></li>
                            <li><Link to="/#contact">Contact Us</Link></li>
                            <li>{this.loginPopup()}</li>
                        
                        </ul>
                    </nav>
                </header>   
                <main id="main">
                    <section className="ourApp">
                        <div className="parallax">
                            <h2 className="ourAppH2">Why Us?</h2>
                        </div>
                        <p>
                            Whether someone is a busy working crew, a parent supporting a whole family, or any college students living on their own,
                            home cooking and preparing food is always a tough process. Cooking itself is already such a pain, and it even takes
                            longer to search through the market and prepare for the ingredients. Especially for people returning home after a
                            whole day working or studying, they may have limited time and energy to decide what to cook, among so many choices
                            of recipes, and spend time shopping the ingredients they need. Therefore, it will definitely be necessary to provide
                            a functional application targeted on those who have no time looking through the bulky recipes each day, save their time
                            and bring the dishes they like to the table.
                        </p>
                        <p>
                            The existing applications designated to help people cooking are still in lack of some important features the users may need.
                            One of the very intelligent cooking websites that inspire us is the <a href="https://www.supercook.com/#/recipes">Supercook</a>
                            which allows users to enter the ingredients they have in the fridge and generate ready-to-cook recipes. It is quite easy to use,
                            but the lack of features that allows people to find recipes within their limited time frame is one issue which this type of application
                            always has. For people who are busy, the recipes it generates that require a long time cooking cannot meet their needs well.
                            Other typical cooking websites include <a href="https://foodgawker.com/">Foodgawker</a>,
                            and <a href="https://www.skinnytaste.com/">Skinnytaste</a> which provides healthy cooking ideas for people
                            on diet. But again, some of them are still unfilterable by either time or ingredients, and most do not support ingredients purchasing
                            which could be highly convenient. Therefore, we brainstorm several possible applications that may solve cooking problems in different
                            ways. It may have a better filtering functionality, a community sharing feature, or an ingredients purchasing option. Overall, we
                            want to promote the exchange and inspiration for cooking ideas and bring people better experiences of cooking!
                        </p>
                    </section>
                    <section className="ourApp">
                        <div className="parallax">
                            <h2 className="ourAppH2" id="spH2">“Mood” Recipes</h2>
                        </div>
                        <p>
                            The overarching goal of the “mood” recipes application will be recommending recipes to the users. It will let the users
                            answer several questions, and the system will automatically recommend recipes to them based on the answers. For example,
                            on a cold winter night, you and your family members are celebrating for your graduation, and you want to eat some warm
                            Asian food, the system will be likely to recommend you Chinese Spicy Hotpot, Japanese Sukiyaki, Korean Budae Jjigae,
                            and some similar food which can make you warmer, good for sharing. The system can make the best choices based on your
                            occasions, the number of people, the current weather, and so on. The users can have the most appropriate food on each
                            specific day and time.
                        </p>
                        <p>
                            We are also integrating the functions of “community” where all users could share their own recipes to the whole community so that other people can have more ideas on what they want to cook. People can see the latest and most popular shared recipes on this app. It also has recipes sorted by locations or countries, for example, Mexican Food, American Food, Italian Food, etc. When the user finds the recipe they like, they can add the ingredients in that recipe into their shopping cart and purchase it online, and the online grocery stores will deliver the ingredients to users, or the users can choose to pick them up at a local store. The users can save time on shopping for the ingredients they need.
                        </p>
                    </section>
                </main>
                <div className="parallax" id="bottomp">
                    <footer className="index-footer" id="contact">
                        <p>This page is a cooperative course work created by Nina Zhang and Zhan Wu as an initial static version of this web app.</p>
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

export default Home;