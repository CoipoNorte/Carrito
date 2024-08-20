import React from 'react';
import { NavItem, Nav, NavbarBrand, Navbar } from 'reactstrap';
import ShoppingCart from './shoppingCart';

class Navegacion extends React.Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <ShoppingCart/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navegacion;