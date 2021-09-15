import React from 'react';
import { Link } from 'react-router-dom';


const SideLayout = ({children}) => {
    return (
        <>
            <div className="body-fluid">
                <div className="text">
                    <h1>Let's <span>Connect!</span></h1>
                    <img src="/images/Group1.png" alt="" />
                </div>

                <div className="form-card">
                    <div className="top-links">
                        <li className="signLink">
                            <Link to="/register">Sign up</Link>
                        </li>
                        <li className="logLink">
                            <Link to="/login">Login</Link>
                        </li>
                    </div>
                        {children}
                </div>
            </div>
        </>
    )
}

export default SideLayout
