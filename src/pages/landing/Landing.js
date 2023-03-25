import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function Landing(args) {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">Evergreen Solutions</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Landing;