import React, { Component } from "react";
import Popup from "reactjs-popup";
import Login from "./Login";
import { HashLink as Link } from 'react-router-hash-link';

export default class LoginPopup extends Component {
    render() {
        return (
            <Popup
                trigger={<Link> Login </Link>}
                modal
                closeOnDocumentClick>
                    <Login />
            </Popup>
        )
    }
}
