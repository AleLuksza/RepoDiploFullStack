import React from 'react';
//import { Link } from 'react-router-dom';
import "../../styles/components/layout/nav.css"
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <a><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></a>
                    <a><NavLink to="/electricas" className={({ isActive }) => isActive ? "activo" : undefined}>Electricas</NavLink></a>
                    <a><NavLink to="/acusticas" className={({ isActive}) => isActive ? "activo" : undefined}>Acusticas</NavLink></a>
                    <a><NavLink to="/electroacusticas" className={({ isActive }) => isActive ? "activo" : undefined}>Electroacusticas</NavLink></a>
                    <a><NavLink to="/accesorios" className={({ isActive }) => isActive ? "activo" : undefined}>Accesorios</NavLink></a>
                    <a><NavLink to="/postventa" className={({ isActive }) => isActive ? "activo" : undefined}>PostVenta</NavLink></a>
                    <a><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></a>
                
                </ul>
            </div>
        </nav>
    );
}

export default Nav;