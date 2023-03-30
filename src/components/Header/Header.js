import './Header.css';
import profile from '../../images/profile.png'

import React from 'react';

const Header = () => {
    return (
        <nav className='navbar'>
            <h2>Knowledge Cafe</h2>
            <img src={profile} alt="profile" width={"60px"} height={"60px"} />
        </nav>
       
    );
};

export default Header;