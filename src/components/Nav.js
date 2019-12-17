import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

class Nav extends Component {
    componentDidMount() {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      };

    render () {
        return (
            <nav className="navbar is-spaced is-white" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item logo" to="/home">
                        Elise Hammons
                    </Link>

                    <div roll="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/home">
                            About
                        </Link>

                        <Link className="navbar-item" to="/portfolio">
                            Portfolio
                        </Link>

                        <Link className="navbar-item" to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;