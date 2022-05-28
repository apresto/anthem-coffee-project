import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand, 
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AnthemLogo from '../app/assets/images/ANTHEM+LOGO.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <Navbar light color="light" sticky="top" expand="md">
            <NavbarBrand className='ms-5' href="/">
                <img src={AnthemLogo} alt="Anthem Logo" className='float-start' />
                <h1 className='mt-1'>Anthem</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'>
                            <i className='fa fa-list fa-lg' /> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/locations'>
                            <i className='fa fa-home fa-lg' /> Locations
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
      </Navbar>
    )
}

export default Header;