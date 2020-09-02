import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = styled.ul`
    width: 250px;    
    height: 165px;
    padding: 20px 0;
    box-sizing: border-box;
    margin-right: 74px;
    background: #FFFFFF;
    border-radius: 8px;
    @media(max-width: 1366px) {
        display: none;
    }
    li {
        width: 100%;
        &:nth-of-type(1) {
          padding-bottom: 9px;
        }
        &:nth-last-of-type(1) {
          padding-top: 9px;
        }
    }
    .link {
        display: block;
        font-size: 14px;
        line-height: 20px;
        color: #381451;
        text-decoration: none;
        margin-bottom: 14px;
        text-indent: 15px;
        border-left: 2px solid #fff;
        &:nth-last-of-type(1) {
            margin-bottom: 0;
        }
        &.active {
            color: #E92070;
            font-weight: bold;
            border-left-color: #E92070;
        }
    }
    .line {
        width: calc(100% - 30px);
        margin-left: 15px;
        border-bottom: 1px solid #CCC4D2
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

const PCNav = () => {
    const [nav, setNav] = useState(navData);
    const currentPath = '/test';
    return (
        <Nav>
            {nav.map((navItem, index) => {
                return (
                    navItem.length ?
                        <li key={index}>
                            {navItem.map((item, indx) => (
                                <div className={`link ${item.to === currentPath ? 'active' : undefined}`} to={item.to}
                                      key={indx}>{item.name}</div>
                            ))}
                        </li>
                        :
                        <li key={index} className={"line"} />
                )
            })}
        </Nav>
    )
};

export default PCNav;
