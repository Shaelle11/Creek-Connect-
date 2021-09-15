import React from 'react';
import styled from 'styled-components';
import FirstLayout from '../layouts/FirstLayout';

const Home = () => {
    return (
        <Wrapper>
            <div className="container">
                <FirstLayout />
                <div className="hero">
                    <div className="text">
                        <h1>Welcome to the</h1>
                        <h1 className='bold'>Home of the</h1>
                        <h1 className='bold'>Future</h1>
                        <img src="/images/Group1.png" alt="" />
                    </div>
                    <div className="hero-image">
                        <img src="/images/GroupAsset.png" alt="" />
                        <h4>Learn, Build, Connect</h4>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    height: 100vh;
    
`
