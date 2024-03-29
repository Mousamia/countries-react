import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav className='nav'>
                <a href="#shop">Shop</a>
                <a href="#order">Order</a>
                <a href="#inventory">Inventory</a>
                <a href="/login">Login</a>

            </nav>
            
        </div>
    );
};

export default Header;