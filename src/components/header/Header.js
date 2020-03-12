import React, { Component } from "react";
import imdb from "../../assets/images/imdb.png";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return <Navbar color="dark" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/" target="_blank">
                        <img src={imdb} alt="Imdb"/>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/toprated"
                            activeClassName="active">
                            Top Rated
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact 
                            to="/upComing"
                            activeClassName="active">
                            Up Coming
                        </NavLink>
                    </NavItem> 
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/favorite"
                            activeClassName="active">
                            Favorite Movies
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

export default Header;