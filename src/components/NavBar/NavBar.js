import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
//import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Play a game</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contacts</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}