import React from 'react';
import { Link } from 'react-router-dom';

const SecondLayout = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src="/images/GroupLogo.png" alt="logo" />
                </Link>

                <ul className="nav">
                    <li>
                        <Link className='navLink' to='/'>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link className='navLink' to='/'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SecondLayout
