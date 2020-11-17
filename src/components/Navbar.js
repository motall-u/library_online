import React, { Component } from 'react';
import 'popper.js';
import 'jquery';
import 'bootstrap';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">BEPT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Livres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mémoires</a>
                    </li>                                        
                    </ul>

                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Se connecter</a>
                    </li>   
                    </ul>

                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
