import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
    <nav className="navbar navbar-expand-md navbar-light fixed-top py-2">
            <div className="container">
                <a href="https://www.linkedin.com/in/alexandre-niyigena-0238171a5/" className="navbar-brand" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Alexander96779" className="navbar-brand" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                      </li>
                      <li className="nav-item">
                        <a href="#skills" className="nav-link">Skills</a>
                      </li>
                      <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;