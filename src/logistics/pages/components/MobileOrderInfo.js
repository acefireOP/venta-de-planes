import React from 'react';
import styled from "styled-components";

const InfoWrapper = styled.ul`
    position: relative;
    margin-top: 19px;
    @media(min-width: 760px) {
        display: none;
    }
    li {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        .iconWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            border-radius: 13px;
            margin-right: 13px;
            z-index: 1;
        }
        .icon{
            width: 15px;
            height: 15px;
            border-radius: 8px;
            background: #7C6C8A;
        }
        .name {
            font-size: 16px;
            line-height: 20px;
            color: #7C6C8A;
            font-weight: bold;
        }
        .time {
            display: none;
        }
        &.active {
            align-items: baseline;
            .name {
                font-size: 18px;
                line-height: 23px;
                color: #E92070;
            }
            .iconWrapper {
                background: #E92070;
                .icon {
                    background: #E92070;
                }
            }
            .time {
                display: block;
                font-size: 16px;
                line-height: 20px;
                color: #7C6C8A;
            }
        }
    }
   
    .line {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 0;
      left: 12px;
      height: calc(100% - 5px);
      width: 2px;
      background: #B3A6BA;
    }
`;

const Text = styled.div`
    width: 228px;
    padding: 14px 10px;
    background: #F4F4F7;
    border-radius: 8px;
    margin: 0 0 10px 38px;
    font-size: 16px;
    line-height: 20px;
    color: #381451;
    @media(min-width: 760px) {
        display: none;
    }
`;

const MobileOrderInfo = () => {
    return (
        <>
            <InfoWrapper>
                <li className={"active"}>
                    <div className={"iconWrapper"} >
                        <div className={"icon"}></div>
                    </div>
                    <div>
                        <div className={"name"}>Solicitud de compra</div>
                        <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    </div>
                </li>
                <li>
                    <div className={"iconWrapper"} >
                        <div className={"icon"}></div>
                    </div>
                    <div>
                        <div className={"name"}>Compra confirmada</div>
                        <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    </div>
                </li>
                <li>
                    <div className={"iconWrapper"} >
                        <div className={"icon"}></div>
                    </div>
                    <div>
                        <div className={"name"}>En tránsito</div>
                        <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    </div>
                </li>
                <li>
                    <div className={"iconWrapper"} >
                        <div className={"icon"}></div>
                    </div>
                    <div>
                        <div className={"name"}>Entregado</div>
                        <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    </div>
                </li>
                <li className={"line"} />
            </InfoWrapper>
            <Text>
                Hemos recibido tu solicitud de compra.
            </Text>
        </>
    )
};

export default MobileOrderInfo;
