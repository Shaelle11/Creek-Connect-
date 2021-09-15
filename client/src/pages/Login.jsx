import React from 'react';
import LoginForm from '../components/LoginForm';
import SecondLayout from '../layouts/SecondLayout';
import SideLayout from '../layouts/SideLayout';

const Login = () => {
    return (
        <>
            <SecondLayout />
            <SideLayout>
                <LoginForm />
            </SideLayout>
        </>
    )
}

export default Login
