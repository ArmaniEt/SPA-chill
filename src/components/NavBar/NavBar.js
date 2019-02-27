import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About me</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contacts</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}