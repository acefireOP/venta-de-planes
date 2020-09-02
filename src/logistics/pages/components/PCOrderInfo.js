import React from 'react';
import styled from "styled-components";
import compra from '../../images/compra.png'
import confirmada from '../../images/confirmada.png'
import transito from '../../images/transito.png'
import entregado from '../../images/entregado.svg'

const InfoWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 65px;
    margin-top: 47px;
    position: relative;
    @media(max-width: 760px) {
        display: none;
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 178px;
        .icon{
            display: flex;
            width: 95px;
            height: 95px;
            padding: 8px;
            border-radius: 48px;
            background: #B3A6BA;
            z-index: 1;
            .iconWrapper {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                border-radius: 40px;
            }
        }
        .name {
            margin-top: 6px;
            font-weight: bold;
            font-size: 18px;
            line-height: 23px;
            text-align: center;
            color: #B3A6BA;
        }
        .time {
            width: 94px;
            font-size: 16px;
            line-height: 20px;
            color: #7C6C8A;
            text-align: center;
        }
        .single {
            display: none;
            margin-top: 21px;
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 35px solid #F4F4F7;;
        }
        &.active {
            .name {
                color: #381451;
            }
            .icon {
                background: linear-gradient(180deg, #E92070 -4.75%, #5C3E8D 88%);
            }
            &:nth-of-type(1){
                .single {
                  display: block;
                }
            }
            
        }
    }
   
    .line {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 47px;
      width: calc(100% - 250px);
      height: 2px;
      margin-left: 50px;
      div{
          float: left;
          width: 33%;
          height: 2px;
          background: #B3A6BA;
          &:nth-child(1) {
              background: red;
          }
          &:nth-child(2) {
              background: yellow;
          }
          &:nth-child(3) {
              background: blue;
          }
      }
    }
`;

const Text = styled.div`
    height: 99px;
    padding-bottom: 14px;
    background: #F4F4F7;
    border-radius: 8px;
    margin: 0 90px 160px 65px;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #381451;
    @media(max-width: 760px) {
        display: none;
    }
`;

const PCOrderInfo = () => {
    return (
        <>
            <InfoWrapper>
                <li className={"active"}>
                    <div className={"icon"}>
                        <div className={"iconWrapper"}>
                            <img src={compra} alt=""/>
                        </div>
                    </div>
                    <div className={"name"}>Solicitud de compra</div>
                    <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    <div className={"single"} />
                </li>
                <li className={"active"}>
                    <div className={"icon"}>
                        <div className={"iconWrapper"}>
                            <img src={confirmada} alt=""/>
                        </div>
                    </div>
                    <div className={"name"}>Compra confirmada</div>
                    <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    <div className={"single"} />
                </li>
                <li>
                    <div className={"icon"}>
                        <div className={"iconWrapper"}>
                            <img src={transito} alt=""/>
                        </div>
                    </div>
                    <div className={"name"}>En tránsito</div>
                    <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    <div className={"single"} />
                </li>
                <li>
                    <div className={"icon"}>
                        <div className={"iconWrapper"}>
                            <img src={entregado} alt=""/>
                        </div>
                    </div>
                    <div className={"name"}>Entregado</div>
                    <div className={"time"}>06 Oct, 2019 11:00 hrs</div>
                    <div className={"single"} />
                </li>
                <li className={"line"}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </li>
            </InfoWrapper>
            <Text>
                Hemos recibido tu solicitud de compra.
            </Text>
        </>
    )
};

export default PCOrderInfo;
