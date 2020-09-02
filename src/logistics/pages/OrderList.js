import React, {useEffect, useState} from "react";
import styled from "styled-components";
import userBg from "../images/userBg.svg"
import {Link} from "react-router-dom";
import Header from "../components/Header";
import {useHistory} from "react-router-dom";
import Loading from "../components/Loading";
import RadiusContentWrapper from "../components/RadiusContentWrapper";
import logout from "../images/Vectorlogout.svg"
import firebase from "firebase";
import {regRut} from "../utils";

const LogisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  width: 92%;
  .headerWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      @media(max-width: 480px) {
          padding-top: 20px;
          .logout {
              top: 0
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
  .logout {
    position: absolute;
    right: 0;
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
  ul {
    max-width: 380px;
    width: 100%;
    margin-bottom: 28px;
  }
  .userInfoItem {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    margin-bottom: 15px;
    padding-bottom: 16px;
    padding-left: 37px;
    padding-right: 22px;
    border-bottom: 1px dashed #B3A6BA;
    .title {
        font-size: 14px;
        line-height: 16px;
        color: #7C6C8A;
       
    }
    .value {
        font-size: 16px;
        line-height: 20px;
        color: #574466;
    }
    .rut {
      .value {
        color: #381451;
      }
    }
    .bolder {
      font-weight: bolder;
    }
    .userInfo {
        display: flex; 
        align-items: center;
        .userIcon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          background: #553E65;
       }
    }
    @media(max-width: 480px) {
       padding-left: 0;
      padding-right: 22px;
    }
 }
 .orderItem {
        display: flex;
        height: 79px;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        border-bottom: 1px solid #E6E2E8;
        .orderInfo {
            width: 170px;
            text-align: center;
            .title {
              font-size: 12px;
              line-height: 15px;
              color: #7C6C8A;
              @media(max-width: 480px) {
                  width: 60px;
                  white-space: nowrap;
                  overflow: hidden;
                }
            }
            .value {
                font-size: 16px;
                line-height: 20px;
                color: #381451;
            }
            @media(max-width: 480px) {
              text-align: left;
            }
        }
        
        .toDetail {
            font-weight: bold;
            font-size: 14px;
            line-height: 15px;
            text-align: right;
            text-transform: uppercase;
            color: #E92070;
            text-decoration: none;
            @media(max-width: 480px) {
              width: 83px;
            }
        }
   }
`;


const OrderList = (props) => {
    const history = useHistory();
    const [orderList, setOrderList] = useState([]);
    const [rut, setRut] = useState(props.match.params && props.match.params.rut);

    const getProcessingOrder = (db) => {
        return new Promise((resolve, reject) => {
            db.where("rut", "==", rut)
                .get()
                .then(function (querySnapshot) {
                    const orderList = [];
                    querySnapshot.forEach(function (doc) {
                        
                        const order = {...doc.data(), id: doc.id};
                        const trackItems = order.trackingItems;
                        const temp = JSON.parse(JSON.stringify(trackItems || []));
                        if(temp.length !== 0) {
                            temp.sort((a, b) => {
                                return b.status - a.status
                            });
                            if (temp[0].status < 4) {
                                orderList.push(order);
                            } else {
                                const {fecha, hora} = temp[0];
                                const [day, month, year] = fecha.split('/');
                                const orderDate = new Date(`${year}/${month}/${day} ${hora}`).getTime();
                                const now = new Date().getTime();
                                if (now - orderDate < 15 * 24 * 60 * 60 * 1000) {
                                    orderList.push(order);
                                }
                            }
                        }
                    });
                    resolve(orderList)
                })
                .catch(function (error) {
                    reject();
                    console.log("Error getting processing order: ", error);
                })
                .finally(function () {
                    resolve()
                });
        })
    };

    useEffect(() => {
        props.setLoadingState(true);
        if (!rut) {
            history.push({
                pathname: '/logistics/inputrut'
            });
            return false;
        }
        let ventaPlanesRef = firebase.firestore().collection("venta-planes-test");

        Promise.all([getProcessingOrder(ventaPlanesRef)]).then(([a1]) => {
            setOrderList([...a1])
        }).finally(() => {
            props.setLoadingState(false);
        });
    }, []);
    const toDetail = (order) => {
        history.push({
            pathname: `/logistics/orderInfo`,
            state: {
                order
            }
        });
    };
    return (
        <>
            <Header/>
            <RadiusContentWrapper>
                <LogisticsWrapper>
                    <div className={"headerWrapper"}>
                        <h2>Solicitudes en curso</h2>
                        <a target="_blank" href='https://www.wom.cl/' className={"logout"}>Ir a wom.cl
                            <img src={logout} alt="logout"/>
                        </a>
                    </div>

                    <ul>
                        <li className={"userInfoItem"}>
                            <div className={"userInfo"}>
                                <div className={"userIcon"}>
                                    <img src={userBg} alt="user"/>
                                </div>
                                <div>
                                    <div className={"title"}>TITULAR</div>
                                    <div className={"value bolder"}>{`${orderList[0]&&orderList[0].name} ${orderList[0]&&orderList[0].lastName}`}</div>
                                </div>
                            </div>
                            <div className={"rut"}>
                                <div className={"title"}>RUT</div>
                                <div className={"value"}>{regRut(rut)}</div>
                            </div>
                        </li>
                        {orderList.map((order, index) => {
                            return (
                                <li key={index} className={"orderItem"}>
                                    <div className={"orderInfo"}>
                                        <div className={"title"}>SOLICITUD EN CURSO</div>
                                        <div className={"value"}>{`Plan ${order.selectedPlan.slice(0, 2)} GB`}</div>
                                    </div>
                                    <span style={{cursor: "pointer"}} onClick={() => toDetail(order)}
                                          className={"toDetail"}>Ver seguimiento</span>
                                </li>
                            )
                        })}
                    </ul>
                </LogisticsWrapper>
            </RadiusContentWrapper>
        </>
    );
};

export default Loading(OrderList);
