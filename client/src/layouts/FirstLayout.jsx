import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const FirstLayout = () => {
    return (
        <Wrapper>
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
                    <li>
                        <Link className='login' to='/login'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className='signUp' to='/register'>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default FirstLayout

const Wrapper = styled.div `

`
