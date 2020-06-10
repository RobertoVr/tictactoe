import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Navbar extends Component {



    render(){
        return (
            <>
            <nav className="nav nav-pills nav-fill">
                <NavLink className="nav-item nav-link" to='/scoreboard'> ScoreBoard</NavLink>
                <NavLink className="nav-item nav-link" to='/board' > Game Board</NavLink>
            </nav>
            </>
        );
    }
}