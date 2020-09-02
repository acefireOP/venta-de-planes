import React from 'react';
import styled from "styled-components";
import RadiusContentWrapper from '../components/RadiusContentWrapper';
import MobileOrderInfo from "./components/MobileOrderInfo";
import PCOrderInfo from "./components/PCOrderInfo";
import Loading from "../components/Loading";
import HeaderWithUser from "../components/HeaderWithUser";
import PCNav from "./components/PCNav";
import MobileNav from "./components/MobileNav";

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media(max-width: 1366px) {
        flex-direction: column;
        align-items: center;
    }
`;

const PageWrapper = styled.div`
    flex: 1;
    width: 100%;
    h2 {
        font-weight: bold;
        font-size: 40px;
        line-height: 50px;
        display: flex;
        align-items: center;
        color: #381451;
        @media(max-width: 480px) {
            font-size: 24px;
            line-height: 30px;
        }
    }
    .infoWrapper {
        display: flex;
        margin-top: 13px;
        border-bottom: 1px dashed #CCC4D2;
        li {
            margin-left: 10px;
            margin-right: 149px;
        }
        @media(max-width: 480px) {
            flex-direction: column;
            li {
                margin: 0;
                &:nth-child(0) {
                    margin-bottom: 12px;
                }  
            }
        }
    }
    .title {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 16px;
        color: #381451;
    }
    .value {
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 20px;
        color: #381451;
    }
`;

class OrderInfo extends React.Component {
    render() {
        return (
            <>
                <HeaderWithUser/>
                <ContentWrapper>
                    <PCNav/>
                    <MobileNav/>
                    <RadiusContentWrapper style={{maxWidth: 960, padding: '24 18 0 24'}}>
                        <PageWrapper>
                            <h2>Seguimiento de mi pedido</h2>
                            <ul className={"infoWrapper"}>
                                <li>
                                    <div className={"title"}>Número de orden</div>
                                    <div className={"value"}>1234567890</div>
                                </li>
                                <li>
                                    <div className={"title"}>Fecha de ingreso</div>
                                    <div className={"value"}>08/05/2019</div>
                                </li>
                            </ul>
                            <PCOrderInfo/>
                            <MobileOrderInfo/>
                        </PageWrapper>
                    </RadiusContentWrapper>
                </ContentWrapper>
            </>
        )
    }
}

export default Loading(OrderInfo);
