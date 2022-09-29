import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            {/* logo */}
            <h1>Cricket Club </h1>
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/home">Home</a>
            </div>
        </nav>
    );
};

export default Header;