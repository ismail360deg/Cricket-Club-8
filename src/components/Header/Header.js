import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className='header'>
            <FontAwesomeIcon className='gym-icon' icon={faDumbbell}></FontAwesomeIcon>
            <a href="/cricket"><h2>Cricket Club </h2></a>
            <div className='header-menu'>
                <a href="/shop">Home</a>
                <a href="/order">Order</a>
                <a href="/inventory">Shop</a>
                <a href="/home">Inventory</a>
            </div>
        </nav >
    );
};

export default Header;