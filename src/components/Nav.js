import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

class Nav extends Component {
    render () {
        return (
            <nav className="navbar is-spaced is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/home">
                        Elise Hammons
                    </Link>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            About
                        </a>

                        <a className="navbar-item">
                            Portfolio
                        </a>

                        <a className="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;