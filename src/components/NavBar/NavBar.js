import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/game'>Play a game</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}