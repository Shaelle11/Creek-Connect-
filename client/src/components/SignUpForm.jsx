import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../redux/actions/authAction';


const SignUpForm = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        if(auth.token) history.push('/')
    }, [auth.token, history])

    const initialState = {
        fullname: "",
        username: "",
        email: "",
        password: "",
        cf_password: "",
        gender: "male"
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    // show/hide password
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    // for input fields
    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    // Form submit
    const handleSubmit = e => {
        e.preventDefault()
        console.log(userData)
        dispatch(register(userData))
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>

                <div className="input-box">
                    <input type="text" placeholder='Full Name' onChange={handleChangeInput} name="fullname" value={fullname} style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }} />

                    <small style={{ fontSize: '10px', color: 'crimson' }}>
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Username' onChange={handleChangeInput} name="username" value={username} style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }} />

                    <small style={{ fontSize: '10px', color: 'crimson' }}>
                        {alert.username ? alert.username : ''}
                    </small>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email address' onChange={handleChangeInput} name="email" value={email} />

                    <small style={{ fontSize: '10px', color: 'crimson' }}>
                        {alert.email ? alert.email : ''}
                    </small>
                </div>

                <div className="input-box">
                    <div className="pass">
                        <input type={typePass ? "text" : "password"} placeholder='Password' onChange={handleChangeInput} name='password' value={password} style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }} />

                        <small className='show-hide' onClick={() => setTypePass(!typePass)}>
                            {typePass ? <i className='fa fa-eye-slash'></i> : <i className="fa fa-eye"></i>}
                        </small>
                    </div>

                    <small style={{ fontSize: '10px', color: 'crimson' }}>
                        {alert.password ? alert.password : ''}
                    </small>
                </div>

                <div className="input-box">
                    <div className="pass">
                        <input type={typeCfPass ? "text" : "password"} placeholder='Confirm Password' onChange={handleChangeInput} name='cf_password' value={cf_password} style={{background:`${alert.cf_password ? '#fd2d6a14' : '' }`}} />

                        <small className='show-hide' onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? <i className='fa fa-eye-slash'></i> : <i className="fa fa-eye"></i>}
                        </small>
                    </div>

                    <small style={{fontSize:'10px', color: 'crimson'}}>
                    {alert.cf_password ? alert.cf_password : ''}
                </small>
                </div>

                <div className="input-gender">
                    <label className='radio'>Male
                        <input type="radio" name="gender" value="male" onChange={handleChangeInput} />
                        <span className='checkmark'></span>
                    </label>
                    <label className='radio'>Female
                        <input type="radio" name="gender" value='female' onChange={handleChangeInput} />
                        <span className='checkmark'></span>
                    </label>
                </div>

                <div className="signin-btn">
                    <button type='submit'>Sign up</button>
                </div>
            </form>
        </Wrapper>
    )
}

export default SignUpForm

const Wrapper = styled.div`
    
`
