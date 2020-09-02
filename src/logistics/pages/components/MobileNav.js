import React, {useState} from 'react';
import styled from "styled-components";
import Arrow from "../../images/icon_arrow_right.svg";
import RadiusContentWrapper from "../../components/RadiusContentWrapper";

const Wrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 13px;
    margin-bottom: 18px;
    @media(min-width: 1366px) {
        display: none;
    }
`;

const Content = styled.div`
    width: 100%;
    padding: 0 15px 21px;
    .title {
        margin: 16px 0 8px;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #7C6C8A;
    }
    .selectWapper {
        height: 44px;
        padding: 0 16px;
        position: relative;
        border: 1px solid #381451;
        box-sizing: border-box;
        border-radius: 8px;
        text-transform: uppercase;
        color: #381451;
        select {
            height: 100%;
            width: 100%;
            border: none;
            font-size: 16px;
            line-height: 20px;
            outline: none;
        }
        label {
            position: absolute;
            right: 16px;
            top: 50%;
            margin-top: -5px;
            bottom: 0px;
            background: #fff;
        }
    }
`;


const navData = [
    [
        {
            name: 'Mi Cuenta',
            to: ''
        },
        {
            name: 'Información personal',
            to: ''
        }
    ],
    [],
    [
        {
            name: 'Mis pedidos',
            to: ''
        },
        {
            name: 'Seguimiento de mi pedido',
            to: '/test'
        }
    ]
];

function translateNav(nav) {
    const newNav = [];
    nav.map((item)=>{
       newNav.push(...item);
    });
    return newNav;
}

const MobileNav = () => {
    const [nav, setNav] = useState(translateNav(navData));
    const currentPath = '/test';
    return (
        <Wrapper>
            <RadiusContentWrapper style={{padding: 0, maxWidth: 960, margin: 'auto'}}>
                <Content>
                    <div className={"title"}>ESTAS EN:</div>
                    <div className={"selectWapper"}>
                        <select name="ESTAS EN" id="nav">
                            {
                                nav.map((item, index)=>(
                                    <option key={index} value ={item.to}>{item.name}</option>
                                ))
                            }
                        </select>
                        <label
                            htmlFor="select-1"
                        >
                            <img className="arrow" src={Arrow} alt="arrow" />
                        </label>
                    </div>
                </Content>
            </RadiusContentWrapper>
        </Wrapper>
    )
};

export default MobileNav;
