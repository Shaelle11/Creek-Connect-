import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authAction';

const LoginForm = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (auth.token) history.push('/')
    }, [auth.token, history])

    const initialState = {
        email: "",
        password: ""
    }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData;

    // show/hide password
    const [typePass, setTypePass] = useState(false)

    // for input fields
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(userData))
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="input-box">
                    <input type="email" placeholder='Email address' onChange={handleChangeInput} value={email} name='email' />
                </div>

                <div className="input-box">
                    <div className="pass">
                        <input type={typePass ? "text" : "password"} placeholder='Password' onChange={handleChangeInput} value={password} name='password' />

                        <small className='show-hide' onClick={() => setTypePass(!typePass)}>
                            {typePass ? <i className='fa fa-eye-slash'></i> : <i className='fa fa-eye'></i>}
                        </small>
                    </div>
                </div>

                <div className="signin-btn">
                    <button type="submit" disabled={email && password ? false : true}>Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm
