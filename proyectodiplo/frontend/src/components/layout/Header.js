import React from 'react';
import "../../styles/components/layout/header.css"

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src='imagenes/logoheader.jpg' alt='Logo'></img>
                <h1>FlacoZeta</h1>
            </div>
        </header>
    );
}

export default Header;