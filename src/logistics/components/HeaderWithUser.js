import React from 'react';
import styled from 'styled-components';
import logo from '../images/footer/logowom.svg'
import userBg from '../images/Vectoruser.svg'

const HeaderWrapper = styled.div`
    width: 100%;
    .content {
         margin:0  10% 32px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         height: 75px;          
    }
    @media(max-width: 480px) {
        height: 47px;
        margin:0  10px 13px;
    }
    .logo {
        width: 58px;
    }
    .userInfo {
        display: flex;
        align-items: center;
    }
    .userBg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: #553E65;
        @media(max-width: 480px) {
            width: 30px;
            height: 30px;
        }
    }
    .username {
        margin-left: 8px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #fff;
    }
`;

const HeaderWithUser = (props)=>{
    return (
        <HeaderWrapper>
            <div className={"content"}>
                <img src={logo} className={'logo'}  alt="logo"/>
                <div className={"userInfo"}>
                    <div className={"userBg"}>
                        <img src={userBg} alt="userIcon"/>
                    </div>
                    {window.innerWidth > 480 && (
                        <div className={"username"}>Mi Perfil</div>
                    )}
                </div>
            </div>
        </HeaderWrapper>
    )
};

export default HeaderWithUser;
