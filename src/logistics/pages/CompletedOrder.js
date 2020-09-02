import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import Header from "../components/Header";
import RadiusContentWrapper from "../components/RadiusContentWrapper";
import logout from "../images/Vectorlogout.svg";
import arrowIcon from "../images/icon_arrow_back.svg"
import {regPhone, regRut} from "../utils";
import firebase from "firebase";
import Loading from "../components/Loading";
import TimeLine from "./components/TImeLine";
import Alerta from "../../images/icon_alerta.svg";

const LogisticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    align-items: center;
    .headerWrapper {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
     
      .operateWrapper {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      .logout, .prevBack {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        text-align: right;
        text-transform: uppercase;
        color: #E92070;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        img {
            margin-left: 14px;
        }
      }
      .prevBack {
          img {
              transform: rotateZ(90deg);
              margin-left: 0;
              margin-right: 10px;
          }
      }
      @media(max-width: 480px) {
          padding-top: 40px;
          .operateWrapper {
              align-items: flex-start;
              padding-left: 17px;
              padding-right: 12px;
          }
      }
    }
    h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #381451;
    }
    .contentWrapper {
        width: 100%;
        padding: 0 60px;
        @media(max-width: 480px) {
            padding: 0 8px 0 12px;
        }
    }
    .infoTitle {
        margin-top: 30px;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        color: #76489B;
    }
    .contractInfo {
        width: 100%;
        padding: 12px;
        display: flex;  
        margin-top: 8px;
        border: 1px solid #E6E2E8;
        justify-content: space-around;
        @media(max-width: 480px) {
            flex-wrap: wrap;
            padding: 0;
            li {
              width: calc(50% - 20px);
              margin: 10px;
              .title, .value{
                  text-align: left;
              }
            }
        }
        
        .title {
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            color: #7C6C8A;
        }
        .value {
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #381451;
        }
    }
    table {
        margin-top: 12px;
        margin-bottom: 32px;
        width: 100%;
        .title {
            font-size: 12px;
            line-height: 15px;
            color: #7C6C8A;
            th {
                width: 100px;
                text-align: left;
            }
        }
        .value {
            font-size: 16px;
            line-height: 20px;
            color: #381451;
            border-bottom: 1px solid #E6E2E8;
            &:first-child {
              font-weight: bold;
            }
            td{
                padding: 12px 0;
            }
            &.active {
                font-weight: bolder;
            }
        }
    }
`;

const ButtonWrap = styled.div`
  margin-bottom: 24px;
  width: 280px;
  border-radius: 8px;
  height: 44px;
  transition: background 0.5s ease;
  user-select: none;
  text-decoration: none;
  color: #2D1441;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
  text-transform: uppercase;
  border: 1px solid #381451;
`;

const TipWrapper = styled.div`
  display: flex;
  width: calc(100% - 120px);
  margin: 35px auto 0;
  background: rgba(233, 172, 32, 0.1);
  border: 1px solid #e9ac20;
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 480px) {
    width: 94%;
    padding-right: 14px;
  }
  .alerta {
    height: 15px;
    margin: 19px 9px 0 18px;
  }
  .title {
    margin: 13px 0 3px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #7c6c8a;
  }
  .tips {
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 15px;
    color: #7c6c8a;
    span {
      color: #E92070;
      font-weight: bold;
      white-space: nowrap;
    }
  }
`;

const defaultData = [
    {
        descAtBar: 'Solicitud recibida',
        descAtDetail: 'Solicitud recibida',
    }, {
        descAtBar: 'Confirmación compra',
        descAtDetail: 'Confirmación de compra',
    }, {
        descAtBar: 'En tránsito',
        descAtDetail: 'Producto en tránsito',
    }, {
        descAtBar: 'Entregado',
        descAtDetail: 'Producto entregado',
    },
    {
        descAtBar: 'Retirado',
        descAtDetail: 'Producto retirado en E-lockers',
    },
    {
        descAtBar: 'Cancelada',
        descAtDetail: 'Orden cancelada. Comunícate con nosotros para más información',
    }
];

const CompeletedOrder = (props) => {
    const history = useHistory();
    const [order, setOrder] = useState(props.location.state && props.location.state.order || {})
    const [orderStatus, setOrderStatus] = useState('process');
    const [timeLine, setTimeLine] = useState([]);
    useEffect(() => {
        let tempTimeLine = [];
        // order.trackingItems = demoData;
        order.trackingItems && order.trackingItems.map((item) => {
            tempTimeLine.push({
                ...item,
                ...defaultData[item.status - 1]
            });
            if (item.status === 6) {
                setOrderStatus('return')
            }
        });
        tempTimeLine.sort((a, b) => {
            return a.status - b.status
        });
        setTimeLine(tempTimeLine);

    }, [order]);

    if (!order) {
        history.push({
            pathname: '/logistics/inputrut'
        });
        return false;
    }

    const update = () => {
        props.setLoadingState(true);
        let ventaPlanesRef = firebase.firestore().collection("venta-planes-test");
        ventaPlanesRef.where("televentaID", "==", order.televentaID || "123")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    setOrder({...doc.data(), id: doc.id});
                });
            }).finally(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            props.setLoadingState(false);
        })
    };

    const Tips = () => {
        return (
            <TipWrapper>
                <img className="alerta" src={Alerta} alt="vector"/>
                <div>
                    <div className="title">Detectamos un problema en el proceso de tu envío.</div>
                    <div className="tips">Te enviaremos un correo con el motivo del problema, si tienes dudas puedes comunicarte con nosotros a través de WhatsApp <span>+56 9 3522 3070</span>, llamando al <span>103</span> si eres de WOM o al <span>22 337 7600</span> desde otras compañías.</div>
                    <a className="router"/>
                </div>
            </TipWrapper>
        )
    };

    return (
        <>
            <Header/>
            <RadiusContentWrapper>
                <LogisticsWrapper>
                    <div className={"headerWrapper"}>
                        <h2>Estado de solicitud</h2>
                        <div className={"operateWrapper"}>
                            <div onClick={() => {
                                history.push({
                                    pathname: `/logistics/orderlist/${encodeURI(order.rut)}`,
                                });
                            }} className={"prevBack"}>
                                <img src={arrowIcon} alt="logout"/>
                                Volver
                            </div>
                            <a target="_blank" href='https://www.wom.cl/' className={"logout"}>Ir a wom.cl
                                <img src={logout} alt="logout"/>
                            </a>
                        </div>
                    </div>

                    <TimeLine tracking={timeLine} order={order}/>

                    {orderStatus === 'return' && (<Tips/>)}

                    <div className={"contentWrapper"}>
                        <div className={"infoTitle  "}>
                            Información de la orden
                        </div>
                        <ul className={"contractInfo"}>
                            <li className={"titular"}>
                                <div className={"title"}>TITULAR</div>
                                <div className={"value"}>{`${order.name} ${order.lastName}`}</div>
                            </li>
                            <li className={"rut"}>
                                <div className={"title"}>RUT</div>
                                <div className={"value"}>{regRut(order.rut)}</div>
                            </li>
                            <li className={"contacto"}>
                                <div className={"title"}>Nº CONTACTO</div>
                                <div className={"value"}>{regPhone(order.phone)}</div>
                            </li>
                            <li className={"solicitud"}>
                                <div className={"title"}>SOLICITUD</div>
                                <div className={"value"}>Plan {order.selectedPlan.toUpperCase().slice(0, 2)} GB</div>
                            </li>
                        </ul>
                        <div className={"infoTitle  "}>
                            Detalle de seguimiento
                        </div>
                        <table>
                            <thead>
                            <tr className={"title"}>
                                <th>FECHA</th>
                                <th>HORA</th>
                                <th>ACTIVIDAD</th>
                            </tr>
                            </thead>
                            <tbody>
                            {JSON.parse(JSON.stringify(timeLine)).reverse().map((trackingItem, index) => {
                                return (
                                    <tr key={index} className={"value"}>
                                        <td>{trackingItem.fecha}</td>
                                        <td>{trackingItem.hora}</td>
                                        <td>{trackingItem.descAtDetail}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    {window.innerWidth > 480 && order.trackingItems && order.trackingItems.length !== 4 && (
                        <ButtonWrap onClick={update}>actualizar</ButtonWrap>)}
                </LogisticsWrapper>
            </RadiusContentWrapper>
            {window.innerWidth < 480 && order.trackingItems && order.trackingItems.length !== 4 && (
                <ButtonWrap onClick={update}>actualizar</ButtonWrap>)}
        </>
    );
};

export default Loading(CompeletedOrder);
