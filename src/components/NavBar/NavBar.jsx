import React, {useState} from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="navbar-container">
            <img src={require("../../images/logo.png")} alt="Logo" className="logo"/>             
            <ul className={isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <i className="fa-solid fa-xmark" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faXmark}/>
                </i>
            </ul>
            <i className="fa-solid fa-bars" onClick={openMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
            </i>
    </div>
    );
}

export default NavBar;