import React from 'react';
import SecondLayout from '../layouts/SecondLayout';
import SideLayout from '../layouts/SideLayout';
import SignUpForm from '../components/SignUpForm';

const Register = () => {
    return (
        <>
            <SecondLayout />
            <SideLayout>
                <SignUpForm />
            </SideLayout>
        </>
    )
}

export default Register
