import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import "./Layout.css";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <Nav className="bg-dark p-4">
                    <NavItem>
                        <NavLink className="nav__link" to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav__link" to='/game'>Play a game</NavLink>
                    </NavItem>
                </Nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}