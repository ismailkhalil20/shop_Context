import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header">
            <ul className="ulist">
                <li>
                    <Link className="itemss" to="/">Shop</Link>
                </li>
                <li>
                    <Link className="itemss" to="/cart">Cart</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar