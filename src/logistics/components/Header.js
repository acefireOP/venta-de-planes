import React from 'react';
import styled from 'styled-components';
import logo from '../images/footer/logowom.svg'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    .logo {
        width: 180px;
        margin: 50px 0 60px;
        @media(max-width: 480px) {
            width: 58px;
            margin: 10px 0 15px;
        }
    }
`;

const Header = (props) => {
    return (
        <HeaderWrapper>
            <img src={logo} className={'logo'} alt="logo"/>
        </HeaderWrapper>
    )
};

export default Header;
